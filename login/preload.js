import {contextBridge, ipcRenderer} from 'electron'

contextBridge.exposeInMainWorld('api', {
cadastro:()=> ipcRenderer.invoke('cadrastro-login',login)
    
})