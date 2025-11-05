import {contextBridge, ipcRenderer} from 'electron'

contextBridge.exposeInMainWorld('api', {
    nome: 'Aplicação Desktop',
    versaoNode: () => { return `NODE - ${process.versions.node}`},
    versaoElectron: () => { return `ELECTRON - ${process.versions.electron}`},
    // som: soma,

    tema: () => { ipcRenderer.send('mudar-tema') },
    zoom: () => {ipcRenderer.send('mudar-zoom') },
     zoomMenos: () => {ipcRenderer.send('mudar-zoom-menos') },

    criarJanela: () => { ipcRenderer.send('criar-janela')},

    soma: (n1, n2) => ipcRenderer.invoke('calc-soma', n1, n2),

    enviarMsg: (msg) => ipcRenderer.send('envia-msg',msg),
    receberMsg: (msg) => ipcRenderer.on('devolver-msg', msg) ,
    historicoResultRet: (historico) => ipcRenderer.on('calc-result', historico),  
    historicoSoma: (historico) => ipcRenderer.send('calc-soma-result', historico)    
})


function soma(a, b){
    return a+b
}



