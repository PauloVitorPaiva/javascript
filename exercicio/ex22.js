let num = [10, 300 ,40]
num.push(3)
num.sort(function(a, b){return a-b})
console.log(`O vetor tem ${num.length} posições`)
console.log(num)
let res = num.indexOf(1)
if (res == -1) {
    console.log("o valor não foi encontrado")
}
else {
    console.log(`O valor 2 esta no posição ${res}`)
}
