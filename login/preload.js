import {contextBridge, ipcRenderer} from 'electron'

contextBridge.exposeInMainWorld('api', {
cadastro:(login)=> ipcRenderer.invoke('cadastro-login',login)
    
})