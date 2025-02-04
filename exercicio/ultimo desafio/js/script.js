let n = document.querySelector("#txtnum")
const val = document.querySelector("#val")
const resf = document.querySelector("#res")
let conjn = []

function valores() {
    let num = Number(n.value)
    if (num >= 1 && num <= 100) {
        val.value += `Valor ${num} Adicionado \n`
        return num;
    }
    else {
        alert(`Este número é invalido digite outro`)
        return null
    }
}

function jexiste(num) {
    if (conjn.includes(num)) {
       alert(`O número ${num} já esta na lista`) 
       return false
    }
    else {
        return true
    }
}

function adilista() {
    let num = valores()

    if (num && jexiste(num)) {
        conjn.push(num)  
        resf.innerHTML += `O número ${num} foi adicionado a lista`;
    }
}

