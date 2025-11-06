function enviarMsg() {
        window.api.enviarMsg(document.getElementById('msg').value)
}

window.api.receberMsg((event, msg) => {
        document.getElementById('msg2').innerHTML = `${msg}`
})