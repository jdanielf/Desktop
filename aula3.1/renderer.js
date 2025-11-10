// console.log(`SO - ${process.platform}`)
// console.log(`ELECTRON - ${process.versions.electron}`)
// console.log(`NODE - ${process.versions.node}`)

console.log(`${window.api.versaoNode()}`)
console.log(`${window.api.versaoElectron()}`)
console.log(`${window.api.nome}`)

// calculadora
const limpar = document.getElementById('limpar')
const visor = document.getElementById('visor')
let op

limpar.addEventListener('click', () => {
        visor.value = ""
})
// document.getElementById('b7').addEventListener('click', () => {
//     visor.value += document.getElementById('b7').textContent
// })
let botoes = document.querySelectorAll('button')
botoes.forEach((botao) => {
        botao.addEventListener('click', () => {
                if(botao.id === 'limparUm'){
                        visor.value = (visor.value).slice(0, -1)
                }else if (botao.className === 'num') {
                        visor.value += botao.textContent.trim()
                } else if (botao.className === 'op') {
                        visor.value += botao.textContent
                        op = botao.textContent.trim()
                        console.log(op)
                } else if (botao.id === 'igual') {
                        window.api.historicoSoma(visor.value)
                        document.getElementById('dica').style.visibility = 'visible'
                        let conteudo = visor.value.split(op)
                        switch (op) {
                                case '+':
                                       // visor.value = Number(conteudo[0]) + Number(conteudo[1])                                        
                                        window.api.soma(Number(conteudo[0]), Number(conteudo[1])).then((result) => {
                                                visor.value = result
                                        })      
                                        break
                                case '-':
                                        visor.value = Number(conteudo[0]) - Number(conteudo[1])
                                        break
                                case '*':
                                        visor.value = Number(conteudo[0]) * Number(conteudo[1])
                                        break
                                case '/':
                                        visor.value = Number(conteudo[0]) / Number(conteudo[1])
                                        break
                        }
                }
        })
})

function soma() {
        let a = 5
        let b = 3
        document.getElementById('texto').innerHTML = `${window.api.som(a, b)}`
}

function mudarTema() {
        window.api.tema()
}

function mudarZoom() {
        window.api.zoom()
}

function mudarZoomMenos() {
        window.api.zoomMenos()
}

function criarJanela() {
        window.api.criarJanela()
}

// function somar() {
//         let n1 = Number((document.getElementById('b7').textContent))
//         let n2 = Number((document.getElementById('b8').textContent))
//         // document.getElementById('visor').value = await window.api.soma(n1,n2)
//         window.api.soma(n1, n2).then((result) => {
//                 document.getElementById('visor').value = result
//         })
// }

function enviarMsg() {
        window.api.enviarMsg(document.getElementById('msg').value)
}

window.api.receberMsg((event, msg) => {
        document.getElementById('msg2').innerHTML =  msg + "\n"
})

function historicoSoma() {
                window.api.historicoSoma((event, historico) )}
                // window.api.historicoSoma(visor.value)
        //         => {
        //         document.getElementById('historico').innerHTML = ''
        //         historico.forEach((item) => {
        //                 document.getElementById('historico').innerHTML += `${item}<br>`
        //         })
        // })
// }

document.getElementById("historico").addEventListener("click", ()=>{
        window.api.historicoResultRet((event, result) => {
                document.getElementById("historicoResult").innerHTML = 'vistos o histórico:<br>'
                result.forEach((op)=>  document.getElementById("historicoResult").innerHTML+= `${op}<br>`)
        })
})