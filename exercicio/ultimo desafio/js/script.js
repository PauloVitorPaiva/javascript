let n = document.querySelector("#txtnum")
const val = document.querySelector("#val")
const resf = document.querySelector("#res")
let conjn = []

function valores() {
    let num = Number(n.value)
    conjn.push(num)
    let c = 0
    if (num >= 1 && num <= 100) {
        val.value += `Valor ${num} Adicionado \n`
    }
    else {
        alert(`O valor ${num} é invalido digite outro valor`)
        return
    }
}

function removerdup(conjn) {
    return [...new Set(conjn)]
}
resf.innerHTML = 
