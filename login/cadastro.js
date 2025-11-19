document.getElementById('cadastrar').addEventListener('click', () => {
    let nome = document.getElementById("nome").value
   let cpf = document.getElementById("cpf").value
    let telefone = document.getElementById("telefone").value
    let bairro = document.getElementById("bairro").value
    let rua = document.getElementById("rua").value
    let numero = document.getElementById("numero").value
    let senha = document.getElementById("senha").value
   
    
//    window.api.cadastro({nome,senha,cpf,telefone,bairro,rua,numero})// enviando os adados para o main.js
   //recebendo a resposta do main.js 
   window.api.cadastro({nome,cpf,telefone,bairro,rua,numero,senha}).then((result) => {
    if(result){
       window.location.href = 'index.html'
    }
    // else{
    //     alert('Login ou senha incorretos')
    // }
})
    
})