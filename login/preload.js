import {contextBridge, ipcRenderer} from 'electron'

contextBridge.exposeInMainWorld('api', {
cadastro:(cadastros)=> ipcRenderer.invoke('cadastro1',cadastros)
    
})

