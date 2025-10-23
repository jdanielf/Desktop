 function pegarNome(){
      let conteudo = document.getElementById("nome").value
        alert("Olá, " + conteudo )
        document.getElementById("nome").value = ""
        document.getElementById("texto").innerHTML = "Bem-vindo, " + conteudo + "!"
      }

      function limparButton(){
        document.getElementById("texto2").innerHTML = ""
        document.getElementById("num").value = ""
        document.getElementById("texto").innerHTML = ""
        document.getElementById("nome").value = ""
        document.getElementById("atividade").innerHTML = ""
        document.getElementById("prova").innerHTML = ""
        
      }
      function limpar(){
        document.getElementById("cel").value = ""
      document.getElementById("resultado").innerHTML = ""
      }

  
      function pegarNumero(){
      let numero= document.getElementById("num").value
     
       if(numero>0){
       if(numero%2==0){
        document.getElementById("texto2").innerHTML = "O número par e positivos é = " + numero 
       }else if(numero%2!=0){
        document.getElementById("texto2").innerHTML = "O número impar positivo é = " + numero 
       }   
      
      }   
      if(numero<0){
       if(numero%2==0){
        document.getElementById("texto2").innerHTML = "O número par e negativo é = " + numero 
       }else if(numero%2!=0){
        document.getElementById("texto2").innerHTML = "O número impar negativo é = " + numero 
       }   
      
      }   
    }

      function media(){
      let atividade= document.getElementById("atv").value
      let prova= document.getElementById("pro").value
      let med=(atividade*0.4)+(prova*0.6)   
        alert("Sua média é  " + med.toFixed(2)  )
   
        document.getElementById("resultado").innerHTML = "Sua média é  " + med.toFixed(2) 


      }


      function tempk(){ 
       let cel= parseFloat(document.getElementById("cel").value)
       if(isNaN(cel)){
        alert("Por favor, insira um valor numérico válido para Celsius.")
        return
       }
       let kel= cel + 273.15
        alert(`A temperatura é ${kel.toFixed(2)}k`  )
        document.getElementById("resultado").innerHTML = `A temperatura é ${kel.toFixed(2)}k`
         
      }
       function tempf(){ 
        let cel= parseFloat(document.getElementById("cel").value)
        if(isNaN(cel)){
         alert("Por favor, insira um valor numérico válido para Celsius.")
         return
        }
       let fah= (cel * 1.8) + 32
       alert(`A temperatura é ${fah.toFixed(2)}ºF`)
        document.getElementById("resultado").innerHTML = `A temperatura é ${fah.toFixed(2)}ºF`
        

       }