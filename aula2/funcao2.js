 function dolar(){
  if(document.getElementById("real").value == ""){
    alert("Insira um valor em Reais.")
    return
  }if(isNaN(document.getElementById("real").value)){
    alert("Insiransira um valor válido .")
    return
  }
      let real = Number(document.getElementById("real").value)
      let dolar= real / 5.424
       alert(`O valor em Dólar é $${dolar.toFixed(2)}` )
       document.getElementById("resultado").innerHTML = `O valor em Dólar é $${dolar.toFixed(2)}`
 }
function euro(){
  if(document.getElementById("real").value == ""){
    alert("Insira um valor em Reais.")
    return
  }if(isNaN(document.getElementById("real").value)){
    alert("Insiransira um valor válido .")
    return
  }
      let real = Number(document.getElementById("real").value)
      let euro = real / 6.353
       alert(`O valor em Euro é $${euro.toFixed(2)}` )
       document.getElementById("resultado").innerHTML = `O valor em euro é $${euro.toFixed(2)}`

 }
      
function limpar(){
      document.getElementById("real").value = ""
      document.getElementById("resultado").innerHTML = ""
}


    