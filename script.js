function carregar(){
    var msg = document.getElementById('msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são exatamente ${hora}:${minuto}`
    if (hora >= 0 && hora < 12){
        //Bom dia
        msg.innerHTML += `<p>Bom Dia!</p>`
        img.src = 'fotodia.png'
        document.body.style.background = '#aed6f8'
    } else if (hora > 12 && hora <= 18){
        //Boa tarde
        msg.innerHTML += `<p>Boa Tarde!</p>`
        img.src = 'fototarde.png'
        document.body.style.background = '#fbbe6e'
    } else {
        //Boa noite
        msg.innerHTML += `<p>Boa Noite!</p>`
        img.src = 'fotonoite.png'
        document.body.style.background = '#061729'
    }
}