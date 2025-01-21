function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    }
    else {
        let fsex = document.getElementsByName('radisex')
        let fidade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'masculino'
            if (fidade >= 0 && fidade < 10 ) {
               //criança 
               img.setAttribute('src', 'imagens2/criança(h).jpg')
            } else if (fidade < 21) {
                //adolescente
                img.setAttribute('src', 'imagens2/adolescente(h).jpg')
            } else if (fidade < 50) {
                //adulto
                img.setAttribute('src', 'imagens2/adulto(h).jpg')
            } else {
                //velho
                img.setAttribute('src', 'imagens2/velho.jpg')
            }
        } else {
            genero = 'feminino'
            if (fidade >= 0 && fidade < 10) {
                img.setAttribute('src', 'imagens2/criança(m).jpg')
            } else if (fidade < 21) {
                img.setAttribute('src', 'imagens2/adolescente(m).jpg')
            } else if (fidade < 50) {
                img.setAttribute('src', 'imagens2/adulto(m).jpg')
            } else {
                img.setAttribute('src', 'imagens2/velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos o gênero ${genero} com ${fidade} anos`
        res.appendChild(img)
    }
}