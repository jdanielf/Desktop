import {app, BrowserWindow, nativeTheme, ipcMain, Menu, dialog, Notification} from 'electron'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url) // file:////c:/senac
const __dirname = path.dirname(__filename) // c:/senac/

let janela = null 

function criarJanela(){
    nativeTheme.themeSource = 'light' // modo claro/escuro da janela
    janela = new BrowserWindow({ 
        width: 800, height: 800,
        title: "Aplicação Desktop",       
        webPreferences: {
            nodeIntegration: false,           
            contextIsolation: true,
            devTools: true,
            preload: path.join(__dirname,'preload.js'),
            sandbox: false,
           
        }
    })

    janela.loadFile('index.html') 
    // janela.webContents.openDevTools()
    
    janela.removeMenu() //remover menu padrão do electron
}

    app.whenReady().then(() => { 

            criarJanela()
            
    
    })

    // let usuarios = []

    ipcMain.handle('cadastro-login', (event, login) =>{
    //    usuarios.push(login)
        console.log(login)
if(login.nome === "senac" && login.senha === "senac123"){  
        dialog.showMessageBox({
            type: 'info',
            title: 'Login',
            message: 'Login realizado com sucesso!'
        })
    return login.nome
    }else{
    dialog.showMessageBox({
        type: 'error',
        title: 'Login',
        message: 'Login ou senha incorretos!'
    })

    }
    })