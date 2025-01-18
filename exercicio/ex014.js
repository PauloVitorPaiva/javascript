let agora = new Date()
let horas = agora.getHours() 
console.log(`Agora são ${horas} horas`)
if (horas < 12 ){
    console.log('bom dia')
}
else if (horas <= 18) {
    console.log('boa tarde')
}
else if (horas <= 24){
    console.log('boa noite')
}
else {
    console.log('boa madrugada')
}