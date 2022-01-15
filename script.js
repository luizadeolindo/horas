function carregar() {
    var msg = document.querySelector("#msg")
    var img = document.querySelector("#imagem")
     var agora = new Date()
     var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12) {
        img.src = "manha.png"
        document.body.style.background = "#b8c9e7"
    } else if(hora >= 12 && hora <= 18) {
        img.src = "tarde.png"
        document.body.style.background = "#d86e1d"
    } else {
        img.src = "noite.png"
        document.body.style.background = "#263345"
    }
}