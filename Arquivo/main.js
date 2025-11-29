import{app, BrowserWindow, dialog, ipcMain, Menu}from'electron'
import path from'path'
import{fileURLToPath}from'url'
import fs from 'fs'

const __filename=fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let janela =null

const criarJanela=()=>{
    janela=new BrowserWindow({
        title:'Aplicação Desktop',
        width:800,
        height:600,
        resizable:true,
        webPreferences:{
            contextIsolation:true,
            nodeIntegration:false,
            preload:path.join(__dirname,'preload.js'),
            sandbox:false
        
        
        }
    })      

    // janela.removeMenu()
    // janela.webContents.openDevTools()
    janela.loadFile(path.join(__dirname,'index.html'))
    Menu.setApplicationMenu(Menu.buildFromTemplate(menu))
    
  
      janela.webContents.on("context-menu", ()=> {
          Menu.buildFromTemplate(menu).popup({window:janela})})

    
}


app.whenReady().then(()=>{
    // lerArquivo()
    //  escreverArquivo()
    criarJanela()   
   
})

// let arquivo  = path.join(__dirname,'arquivo.txt')
let arquivo = null

function escreverArquivo(conteudo){
    try{
            fs.writeFileSync(arquivo,conteudo ,'utf-8') // esceve no arquivo
}catch(err){
    console.error(err)
}}

async function lerArquivo(){
   let resultado = await dialog.showOpenDialog({
        title: "Abrir arquivo",
        defaultPath: "arquivo.txt",
        filters:[{name:'Texto', extensions:['txt','doc']}],
        properties: ['openFile']
    })
    if(resultado.canceled){
        return
    }
    arquivo = resultado.filePaths[0]
    
    try{
    let conteudo = fs.readFileSync(arquivo,'utf-8') //
    return conteudo
    }catch(err){
        console.error(err)
    }
}    

ipcMain.handle('salvar-arquivo',(event, texto)=>{
    console.log('Texto:', texto)
    escreverArquivo(texto)
    return arquivo

    
})

ipcMain.handle('abrir-arquivo',(event)=>{
    let conteudo = lerArquivo()
    return conteudo
})

ipcMain.handle('salvar-como-arquivo', async (event, texto) => {
     dialog.showSaveDialog({
        title: "Salvar arquivo como",
        defaultPath: "arquivo",
        filters:[{name:'Texto', extensions:['txt','doc']}],
       

  }).then((resultado) => {
        if (resultado.canceled) return
        arquivo = resultado.filePath
        escreverArquivo(texto)
  })
     return arquivo

  
   
})

let menu = [
    {label: 'Arquivo',
    submenu:[
        {label: "Novo",
        submenu:[    
        
        {label: 'Nova Janela', click: () => {criarJanela()}, },
        {label:"Novo Arquivo",  click: () => {
            janela.webContents.send('novo-arquivo')
        }},
        {type: 'separator'},
        

     ]},
     {label: 'Abrir', click: () => {
        janela.webContents.send('abrir-arquivo')
     }},
     {label: 'Salvar', 
        submenu:[
            {label:"Salvar", click: () => {
                if(!arquivo){
                    janela.webContents.send('salvar-como-arquivo')
                 }else{
                janela.webContents.send('salvar-arquivo')}
            }},
            {label:"Salvar Como", click: () => {
                janela.webContents.send('salvar-como-arquivo')
            }},
        ]
     },
     {type: 'separator'},
    {label: 'Sair', role: 'quit' }]},
    {label: 'Editar',
    submenu:[
        {label: 'Desfazer', role: 'undo'},
        {label: 'Refazer', role: 'redo'},
        {type: 'separator'},
        {label: 'Recortar', role: 'cut'},
        {label: 'Copiar', role: 'copy'},
        {label: 'Colar', role: 'paste'},
        {label: "Limpar", role: 'clear' },
        {label: 'Selecionar Tudo', role: 'selectAll'},
    ]   
    },
    {label: 'Exibir',
        submenu:[
            {label: "Zoom +", role: 'zoomIn' },
            {label: "Zoom -", role: 'zoomOut' },
            {label: "Restaurar Zoom", role: 'resetZoom' },
            {type: 'separator'},
            {label: "Tela Cheia", role: 'togglefullscreen' },
        ]
    },

    ]










// let dados = []

// function escreverArquivo(conteudo){
//     try{
//         let pessoa = {nome:'Daniel', cpf:'101.010.110-10'}
//         dados.push(pessoa)
//             fs.writeFileSync(arquivo,JSON.stringify(dados , null,2),'utf-8')
//             // fs.writeFileSync(arquivo,'Escrevendo no arquivo...','utf-8')
// }catch(err){
//     console.error(err)
// }}

// // function lerArquivo(){
// //     try{
// //     let conteudo = fs.readFileSync(arquivo,'utf-8')
// //     console.log('Caminho: ',arquivo,'\n')
// //     console.log('conteudo: ',conteudo)
// //     }catch(err){
// //         console.error(err)
// //     }
// // }

// let dados2 = []

// function lerArquivo(){
//     try{
//     let conteudo = fs.readFileSync(arquivo,'utf-8') //
//     // dados2.push ( JSON.parse(conteudo))// converte para java script
//     dados2 = JSON.parse(conteudo) 
//     console.log('Caminho: ',JSON.parse(conteudo),'\n')
//     console.log('conteudo: ',dados2)
//     console.log('Caminho: ',arquivo,'\n')
//     console.log('conteudo: ',conteudo)

//     }catch(err){
//         console.error(err)
//     }}
