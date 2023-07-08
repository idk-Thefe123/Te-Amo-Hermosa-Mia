setTimeout(cambiaMensaje,2300)

function cambiaMensaje(){
    document.getElementById("loading-message").innerText = "Enviado!!!"
}

setTimeout(function () {
    alert("Recibiste Un Abrazo!")
},2400)