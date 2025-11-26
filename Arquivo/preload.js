import { contextBridge, ipcRenderer } from "electron"

contextBridge.exposeInMainWorld('api', {
    salvar: (texto) => ipcRenderer.invoke('salvar-arquivo', texto),
    abrir: () => ipcRenderer.invoke('abrir-arquivo')
})