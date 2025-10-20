import {app,BrowserWindow} from 'electron'
const criaJanela = () =>{ const janela = new BrowserWindow({ width: 1800 , height: 1200})
janela.loadFile('index.html')
}
app.whenReady().then(()=>{criaJanela() 
    console.log("Executando elecreton")})




