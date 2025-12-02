import {app, BrowserWindow, nativeTheme, ipcMain, Menu, dialog, Notification} from 'electron'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url) 
const __dirname = path.dirname(__filename) 

let janela = null 

function criarJanela(){
    nativeTheme.themeSource = 'light' // modo claro/escuro da janela
    janela = new BrowserWindow({ 
        width: 800, height: 800,
        title: "Gerencioador de tarefas",       
        webPreferences: {
            nodeIntegration: false,           
            contextIsolation: true,
            devTools: true,
            preload: path.join(__dirname,'preloade.js'),
            sandbox: false,
           
        }
    })

    janela.loadFile('chamatarefas.html') 
    // janela.webContents.openDevTools()
    
    janela.removeMenu() //remover menu padrão do electron
}

const arquivo  = path.join(__dirname,'arquivo.json')

app.whenReady().then(()=>{
    // lerArquivo()
    //  escreverArquivo()
    criarJanela()   
   
})

function escreverArquivo(conteudo){
    try{
            fs.writeFileSync(arquivo,JSON.stringify(conteudo, null, 2) ,'utf-8')
            }catch(err){
    console.error(err)
}}


let texto=[]
ipcMain.handle("cadastroTarefa", (event ,tarefa1)=>{
    texto.push(tarefa1)
    escreverArquivo(texto)
    console.log(texto)

})



ipcMain.handle('buscaTitulo', (event, valida) =>{
            
            let titulo0  = texto.find((elemento) => elemento.titulo === valida.tituloBusca)
            
            if(titulo0){ 
                
                return valida.tituloBusca    
            }else{
                return null
            }


        })







