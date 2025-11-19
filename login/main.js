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

    janela.loadFile('logincadastro.html') 
    // janela.webContents.openDevTools()
    
    janela.removeMenu() //remover menu padrão do electron
}

    app.whenReady().then(() => { 

            criarJanela()
            
    
    })


   let usuarios = []

   ipcMain.handle(`cadastro1`, (event, cadastros) =>{
        usuarios.push(cadastros)
         console.log(cadastros)
         if(cadastros) {
            dialog.showMessageBox({ 
                type: 'info',
                title: 'Cadastro',
                message: 'Cadastro realizado com sucesso!'
            })
            return true
        }
            else{
                dialog.showMessageBox({
                    type: 'error',
                    title: 'Cadastro',
                    message: 'Erro no cadastro!'
                })
            return false
            }
         
        })

    

    // ipcMain.handle('login1', (event, login) =>{
    // let nome 
    // let senha0
        
    //     usuarios.forEach((elemento,indice) => { 
    //         if(indice===0){
    //             nome = elemento
    //             if(indice=== usuarios.length-1){
    //             senha0 = elemento
                   
    //             }
    //         console.log(nome)
            
    //         }
         
    //         })
    //         return nome
    //     })


        ipcMain.handle('login1', (event, valida) =>{
            
            let nome0  = usuarios.find((elemento) => elemento.nome === valida.login && elemento.senha === valida.senha)
            console.log(nome0)
            if(nome0){ 
                // console.log(valida.login)
                return valida.login      
            }else{
                return null
            }


        })







   
    // usuarios.push(login)
//         console.log(login)
// if(login.nome === "senac" && login.senha === "senac123"){  
//         dialog.showMessageBox({
//             type: 'info',
//             title: 'Login',
//             message: 'Login realizado com sucesso!'
//         })
//     return login.nome
//     }else{
//     dialog.showMessageBox({
//         type: 'error',
//         title: 'Login',
//         message: 'Login ou senha incorretos!'
//     })

//     }
//     })
        // let usuarios = []
    