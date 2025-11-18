document.getElementById('enviar').addEventListener('click', () => {
   let nome = document.getElementById("login").value
   let senha = document.getElementById("senha").value
   window.api.cadastro({nome,senha})// enviando os adados para o main.js
   //recebendo a resposta do main.js 
   window.api.cadastro({nome,senha}).then((result) => {
    if(result){
        localStorage.setItem('usuario', result)
        window.location.href = 'index2.html'
    }
    // else{
    //     alert('Login ou senha incorretos')
    // }
})
})

  
    


