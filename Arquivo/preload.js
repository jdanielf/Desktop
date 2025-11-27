import { contextBridge, ipcRenderer } from "electron"

contextBridge.exposeInMainWorld('api', {
    salvar: (texto) => ipcRenderer.invoke('salvar-arquivo', texto),
    abrir: () => ipcRenderer.invoke('abrir-arquivo'),
    salvarComo: (texto) => ipcRenderer.invoke('salvar-como-arquivo', texto),
    novo :(callback)=> ipcRenderer.on('novo-arquivo', ()=>callback(novo))



})