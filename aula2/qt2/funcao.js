function    mediaAnual(){
    let n1 = Number(document.getElementById("n1").value)
    let  n2 = Number(document.getElementById("n2").value)
    let  n3 = Number(document.getElementById("n3").value)
    let  n4 = Number(document.getElementById("n4").value)

    let media = (n1 + n2 + n3 + n4 ) /4

    document.getElementById("resultado").innerHTML = `A média anual é:  ${media.toFixed(2)}`
}

function limpar(){
    document.getElementById("n1").value = ""
    document.getElementById("n2").value = ""
    document.getElementById("n3").value = ""
    document.getElementById("n4").value = ""
    document.getElementById("resultado").innerHTML = ""
}