document.getElementById('enviar').addEventListener('clik', () => {
   let nome = document.getElementById(`login`).value
   let senha = document.getElementById(`senha`).value
   window.api.cadastro({nome,senha})
    window.location.href = 'index2.html'

})