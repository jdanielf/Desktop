import {contextBridge, ipcRenderer} from 'electron'

contextBridge.exposeInMainWorld('api', {
cadastro:(cadastros)=> ipcRenderer.invoke('cadastro1',cadastros),
validacao:(valida)=> ipcRenderer.invoke('login1',valida)


    
})

