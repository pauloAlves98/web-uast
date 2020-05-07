var seg = document.getElementById('seg')
var segundos = 0
var min = document.getElementById('min')
var minutos = 0
var cronometro

function retornarDoisDigitos(tempo){
    if (tempo <10){
        return "0" + tempo
    }else{
        return tempo
    }
}

function contar(){

    if(segundos == 59){
        segundos = 0
        seg.innerText = retornarDoisDigitos(segundos)
        minutos++
        min.innerText = retornarDoisDigitos(minutos)
    }

    segundos++
    seg.innerText = retornarDoisDigitos(segundos)
}


document.getElementById('iniciar').onclick = function(){
    cronometro = setInterval(function(){ contar()},1000)
}

document.getElementById('zerar').onclick = function(){
    clearInterval(cronometro)
    segundos = 0
    minutos = 0
    seg.innerText = retornarDoisDigitos(0)   
    min.innerText = retornarDoisDigitos(0)    
}