document.getElementById('salvarTarefa').addEventListener('click', () => {
    let titulo = document.getElementById("titulo").value
   let prioridade = document.getElementById("prioridade").value
    let data = document.getElementById("data").value
    let conteudo = document.getElementById("conteudo").value
    
   
    
   window.api.tarefa({titulo,prioridade,data,conteudo}).then((result) => {
  
})
    
})