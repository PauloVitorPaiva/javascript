let nu = document.querySelector("#txtnu")
let res = document.querySelector("#res")

function calcular() {
    if (nu.value <= 0) {
        alert("valor inválido! digite um valor maior que 0")
    }

    let num = Number(nu.value)
    res.value = ''
    for (let c = 1; c <= 10; c++) {
        res.value += `${num} x ${c} = ${num * c}\n`;
    }
}
