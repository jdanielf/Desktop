import {app,BrowserWindow} from 'electron'
const criaJanela = () =>{ 
    const janela = new BrowserWindow({
         width: 1800 , 
         height: 1200,
         title: "Conversor de Moedas",
         resizable: false,
         fullscree: false,
         backgroundColor:"blue" ,
         icon:'com.png'

        })
janela.loadFile('qt1.html')
}
app.whenReady().then(()=>{criaJanela() 
    console.log("Executando elecreton")})
    .catch((erro)=>{ 
        console.log(erro)
   })




