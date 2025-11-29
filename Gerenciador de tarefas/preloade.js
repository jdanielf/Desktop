import {contextBridge, ipcRenderer} from 'electron'

contextBridge.exposeInMainWorld('api', {
tarefa:(tarefa1)=> ipcRenderer.invoke('cadastroTarefa',tarefa1),



    
})
