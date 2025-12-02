   let titulo = document.getElementById("titulo")
   let prioridade = document.getElementById("prioridade")
    let data = document.getElementById("data")
    let conteudo = document.getElementById("conteudo")

    let tarefa= null

document.getElementById('salvarTarefa').addEventListener('click', () => {
   tarefa={titulo: titulo.value,prioridade: prioridade.value, 
    data: data.value,conteudo: conteudo.value}

window.api.tarefa(tarefa).then((result) => {
    alert ("Dados salvos com sucesso!")
    titulo.value = ""
   prioridade.value =""
    data.value= ""
    conteudo.value = ""

  
})
  
    
document.getElementById('buscarBtn').addEventListener('click', () => {
   let login = document.getElementById("tituloBusca").value

window.api.tituloValidacao({titulo}).then((result) => {

    if(result){
        localStorage.setItem('usuario', result)
        window.location.href = 'terfa.html'
        
    }
    else{
        alert('Título incorreto')
    }
})
})

})