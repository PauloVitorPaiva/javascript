function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem'); // Corrigido para 'imagem'
    let data = new Date();
    let hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manhare.png'; // Corrigido o caminho da imagem
        document.body.style.background = '#FAE690'
    } else if (hora >= 12 && hora < 19) {
        img.src = 'imagens/tardere.png'; // Corrigido o caminho da imagem
        document.body.style.background = '#F2A95C'
    } else {
        img.src = 'imagens/noitere.png'; // Corrigido o caminho da imagem
        document.body.style.background = '#012F60'
    }
}

