document.getElementById('cadastrar').addEventListener('click', () => {
    let nome = document.getElementById("nome").value
   let cpf = document.getElementById("cpf").value
    let telefone = document.getElementById("telefone").value
    let bairro = document.getElementById("bairro").value
    let rua = document.getElementById("rua").value
    let numero = document.getElementById("numero").value
    let senha = document.getElementById("senha").value
   
    if(nome === '' || cpf === '' || telefone === '' || bairro === '' || rua === '' || numero === '' || senha === ''){
        alert('Preencha todos os campos')
        return
    }if(cpf.length != 11){
        alert('CPF deve conter 11 digitos')
        return
    }   if(telefone.length < 10){
        alert('Telefone deve conter no minimo 10 digitos')
        return
    }      if(senha.length < 6){
                alert('Senha deve conter no minimo 6 digitos')
        return
    }  if(isNaN(numero)){
        alert('Numero deve ser um valor numerico')
        return
    }      if(isNaN(telefone)){
        alert('Telefone deve ser um valor numerico')
        return
    }      if(isNaN(cpf)){
        alert('CPF deve ser um valor numerico')
        return
    }   if(numero <= 0){
        alert('Numero deve ser maior que zero')
        return
    }   
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