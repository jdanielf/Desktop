import { contextBridge, ipcRenderer } from "electron"

contextBridge.exposeInMainWorld('api', {
    salvar: (texto) => ipcRenderer.invoke('salvar-arquivo', texto),
    abrir: () => ipcRenderer.invoke('abrir-arquivo'),
    salvarComo: (texto) => ipcRenderer.invoke('salvar-como-arquivo', texto),
    novo:(callback)=> ipcRenderer.on('novo-arquivo', callback),
    abrirArquivo: (callback) => ipcRenderer.on('abrir-arquivo', callback),
    salvarArquivo: (callback) => ipcRenderer.on('salvar-arquivo', callback),
    salvarComoArquivo: (callback) => ipcRenderer.on('salvar-como-arquivo', callback),



})