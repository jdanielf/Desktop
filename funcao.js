function calcularMedia() {
    
            let nota1 = Number(document.getElementById("nota1").value)
            let nota2 = Number(document.getElementById("nota2").value)
            let nota3 = Number(document.getElementById("nota3").value)
            let nota4 = Number(document.getElementById("nota4").value)

             if (
        isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) ) 
        {alert("Preencha todas as notas!")
        return
        }

            let media = (nota1 + nota2 + nota3 + nota4) / 4

            if(media >= 7) {
                document.getElementById("resultado").innerText = "Parabéns! Você foi aprovado com média: " + media.toFixed(2)
            }else if(media >= 4.9 && media < 7) {
                document.getElementById("resultado").innerText = "Você está de recuperação com média: " + media.toFixed(2)
            }else if(media < 4) {
                document.getElementById("resultado").innerText = "Infelizmente você foi reprovado com média: " + media.toFixed(2)
            }
            alert("Sua média é: " + media.toFixed(2))
            document.getElementById("resultado").innerText = "Sua média anual é: " + media.toFixed(2)
        }
        function limparCampos() {
   document.getElementById("nota1").value = ""
  document.getElementById("nota2").value = ""
  document.getElementById("nota3").value = ""
  document.getElementById("nota4").value = ""
  document.getElementById("resultado").innerText = ""
  fecharAlerta()
        }   
