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
       document.getElementById("resultado").innerHTML = `O valor em Dólar é $ ${dolar.toFixed(2)}`
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
       alert(`O valor em Euro é ${euro.toFixed(2)}` )
       document.getElementById("resultado").innerHTML = `O valor em euro é ${euro.toFixed(2)}`

 }
      

function peso(){
  if(document.getElementById("real").value == ""){
    alert("Insira um valor em Reais.")
    return
  }if(isNaN(document.getElementById("real").value)){
    alert("Insiransira um valor válido .")
    return
  }
      let real = Number(document.getElementById("real").value)
      let peso = real * 0.0042
       alert(`O valor em Peso é $${peso.toFixed(2)}` )
       document.getElementById("resultado").innerHTML = `O valor em peso é $${peso.toFixed(2)}`

 }
      
function libra(){
  if(document.getElementById("real").value == ""){
    alert("Insira um valor em Reais.")
    return
  }if(isNaN(document.getElementById("real").value)){
    alert("Insira um valor válido .")
    return
  }
      let real = Number(document.getElementById("real").value)
      let libra = real / 7.326
       alert(`O valor em Libra é $${libra.toFixed(2)}` )
       document.getElementById("resultado").innerHTML = `O valor em libra é $${libra.toFixed(2)}`
}

function franco(){
  if(document.getElementById("real").value == ""){
    alert("Insira um valor em Reais.")
    return
  }if(isNaN(document.getElementById("real").value)){
    alert("Insiransira um valor válido .")
    return
  }
      let real = Number(document.getElementById("real").value)
      let franco = real / 7.326
       alert(`O valor em Franco é $${franco.toFixed(2)}` )
       document.getElementById("resultado").innerHTML = `O valor em Franco é $${franco.toFixed(2)}`
}

function limpar(){
  document.getElementById("real").value = ""
  document.getElementById("resultado").innerHTML = ""
}