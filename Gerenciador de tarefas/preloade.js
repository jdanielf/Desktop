import {contextBridge, ipcRenderer} from 'electron'

contextBridge.exposeInMainWorld('api', {
tarefa:(tarefa1)=> ipcRenderer.invoke('cadastroTarefa',tarefa1),
novo:(callback)=> ipcRenderer.on('novo-arquivo', callback),
tituloValidacao:(titulo)=> ipcRenderer.invoke('buscaTitulo',titulo)




    
})
