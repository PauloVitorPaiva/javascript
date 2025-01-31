let num = [8, 1, 7, 4, 2, 6]
/*
for (let n = 0; n < num.length; n++) {
    console.log(`A posição ${n} tem o valor ${num[n]}`);
}
*/
//for(let pos of num)
for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}