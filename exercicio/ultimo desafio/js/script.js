let num = document.querySelector("#txtnum")
let val = document.querySelector("#val")
let resf = document.querySelector("#res")
let conjn = []

function valores(n) {
    if (n >= 1 && n <= 100) {
        return true;
    }
    else {
        alert(`Este número é invalido digite outro`)
        return false;
    }
}

function jexiste(n, l) {
    if (l.indexOf(Number(n)) != -1) {
       alert(`O número ${n} já esta na lista`) 
       return false
    }
    else {
        return true
    }
}

function adilista() {
    if (valores(Number(num.value)) && jexiste(Number(num.value), conjn)) {
        let item = document.createElement('option')
        item.text = `O Valor ${num.value} Adicionado`
        val.appendChild(item)
        conjn.push(Number(num.value))
    }
}

function gerari() {
    let tot = conjn.length
    resf.innerHTML = tot
}
