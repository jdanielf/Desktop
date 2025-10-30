// console.log(`SO - ${process.platform}`)
// console.log(`ELECTRON - ${process.versions.electron}`)
// console.log(`NODE - ${process.versions.node}`)



console.log(`${window.api.versaoNode()}`) 
console.log(`${window.api.versaoElectron()}`) 
console.log(`${window.api.nome}`) 

function soma(){
        let a = 5
        let b = 3
        document.getElementById('texto').innerHTML = `${window.api.som(a,b)}`
}
      

