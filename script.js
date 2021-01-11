function carregar(){
    var msg = document.getElementById('msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    if (hora >= 0 && hora < 12){
        img.src = 'fotodia.png'
            document.body.style.background = '#79a5c1'
                msg.innerHTML = `<p> <strong>BOM DIA!</strong> </p>`
                    msg.innerHTML += `<p>Agora são exatamente ${hora}:${minuto} </p>`
                        msg.style.color = '#79a5c1'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'fototarde.png'
            document.body.style.background = '#feac3d'
                msg.innerHTML = `<p> <strong>BOA TARDE!</strong> </p>`
                    msg.innerHTML += `<p>Agora são exatamente ${hora}:${minuto} </p>`
                        msg.style.color = '#feac3d'
    } else{
        img.src = 'fotonoite.png'
            document.body.style.background = '#497e9f'
                msg.innerHTML = `<p> <strong>BOA NOITE!</strong> </p>`
                    msg.innerHTML += `<p>Agora são exatamente ${hora}:${minuto} </p>`
                        msg.style.color = '#497e9f'
    }
    } 