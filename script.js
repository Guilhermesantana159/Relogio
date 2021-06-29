function relogio(){
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    if(hora < 10){
        hora = "0" + hora
    }
    if(minutos < 10){
        minutos = "0" + minutos
    }
    if(segundos < 10){
        segundos = "0" + segundos
    }
    var horas = hora + ":" + minutos + ":" + segundos

    document.getElementById("tela").value = horas;
}

setInterval(relogio,1000)