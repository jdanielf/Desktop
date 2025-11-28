 let texto = document.getElementById("texto")


function salvarArquivo() {
    window.api.salvar(texto.value).then((caminho) => {
       document.getElementById("caminho").innerHTML = `Caminho: ${caminho}`
    })
}

function abrirArquivo() {
window.api.abrir().then((conteudo) => {
    texto.value = conteudo
})

}
function salvarComo() {
    window.api.salvarComo(texto.value).then((caminho) => {
       document.getElementById("caminho").innerHTML = `Caminho: ${caminho}`
    })  
}

window.api.novo(() => {
texto.value = ""
})

window.api.abrirArquivo(() => {
   abrirArquivo()
})

window.api.salvarArquivo(() => {
    salvarArquivo()
})

window.api.salvarComoArquivo(() => {
    salvarComo()
})