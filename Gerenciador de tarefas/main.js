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
    return tarefa1

})

ipcMain.handle('login1', (event, valida) =>{
            
            let nome0  = usuarios.find((elemento) => elemento.nome === valida.login && elemento.senha === valida.senha)
            // console.log(nome0)
            if(nome0){ 
                // console.log(valida.login)
                return valida.login      
            }else{
                return null
            }


        })
ipcMain.handle('buscaTitulo', (event, titulo) =>{
            
            let titulo1  = texto.find((elemento) => elemento.titu === titulo.login)
            console.log(titulo1)
            if(titulo){ 
                console.log(elemento.titu)
                return elemento.titu     
            }else{
                return null
            }


        })


      







