import {app, BrowserWindow, nativeTheme} from 'electron'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url) // file:////c:/senac
const __dirname = path.dirname(__filename) // c:/senac/

function criarJanela(){
    nativeTheme.themeSource = 'light' // modo claro/escuro da janela
    const janela = new BrowserWindow({ 
        width: 800, height: 800,
        title: "Aplicação Desktop",       
        webPreferences: {
            nodeIntegration: false,           
            contextIsolation: true,
            devTools: true,
            preload: path.join(__dirname,'preload.js'),
            sandbox: false
        }
    })
    janela.loadFile('index.html') 
    janela.webContents.openDevTools()
    janela.removeMenu()
}

app.whenReady().then(() => { 
        criarJanela()
})
  
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit()
    }
})





