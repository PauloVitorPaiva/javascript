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
    num.value = ''
    num.focus()
}

function gerari() {
    let tot = conjn.length
    let maior = conjn[0]
    let menor = conjn[0]
    let soma = 0
    for (let v = 0; v < conjn.length; v++) {
        if (conjn[v] > maior) {
            maior = conjn[v]
        }
        else if (conjn[v] < menor) {
            menor = conjn[v]
        }
    soma += conjn[v]
    }
    resf.innerHTML += `<p>Ao todo temos ${tot} números</p>`
    resf.innerHTML += `<p>O maior valor é ${maior} e o menor valor è ${menor}</p>`
    resf.innerHTML += `<p>A soma de todos os valores é ${soma} e a média da soma é ${soma / tot}</p>`
}

function limpar() {
    val.innerHTML = ''
    resf.innerHTML = ''
}
