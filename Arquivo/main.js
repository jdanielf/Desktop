import{app, BrowserWindow}from'electron'
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

    janela.removeMenu()
    // janela.webContents.openDevTools()
    janela.loadFile(path.join(__dirname,'index.html'))
}

app.whenReady().then(()=>{
    lerArquivo()
    //  escreverArquivo()
    criarJanela()   
   
})

const arquivo  = path.join(__dirname,'arquivo.json')

let dados = []

function escreverArquivo(){
    try{
        let pessoa = {nome:'Daniel', cpf:'101.010.110-10'}
        dados.push(pessoa)
            fs.writeFileSync(arquivo,JSON.stringify(dados , null,2),'utf-8')
            // fs.writeFileSync(arquivo,'Escrevendo no arquivo...','utf-8')
}catch(err){
    console.error(err)
}}

// function lerArquivo(){
//     try{
//     let conteudo = fs.readFileSync(arquivo,'utf-8')
//     console.log('Caminho: ',arquivo,'\n')
//     console.log('conteudo: ',conteudo)
//     }catch(err){
//         console.error(err)
//     }
// }

let dados2 = []

function lerArquivo(){
    try{
    let conteudo = fs.readFileSync(arquivo,'utf-8') //
    // dados2.push ( JSON.parse(conteudo))// converte para java script
    dados2 = JSON.parse(conteudo) 
    console.log('Caminho: ',JSON.parse(conteudo),'\n')
    console.log('conteudo: ',dados2)
    console.log('Caminho: ',arquivo,'\n')
    console.log('conteudo: ',conteudo)

    }catch(err){
        console.error(err)
    }}
