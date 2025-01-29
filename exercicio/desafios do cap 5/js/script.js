let ini = document.querySelector("#txtini");
let fi = document.querySelector("#txtfi");
let pas = document.querySelector("#txtpa");
let va = document.querySelector("#valor");

function contar() {
    va.innerHTML = '';

    if (ini.value == 0 || fi.value == 0 || pas.value == 0) {
        va.innerHTML = 'impossível contar!'
    }
    else {
        let inicio = Number(ini.value)
        let fim = Number(fi.value)
        let passo = Number(pas.value)
        if (passo <= 0) {
            alert('Passo inválido! Considerando Passo 1')
            passo = 1
        }
        if (inicio < fim) {
            for (let c = inicio; c <= fim; c += passo) {
                va.innerHTML += `${c} 👉`
            }
        }
        else {
            for(let c = inicio; c >= fim; c -= passo) {
                va.innerHTML += `${c} 👉`
            }
        }
        va.innerHTML += `🚩`
    }
}
