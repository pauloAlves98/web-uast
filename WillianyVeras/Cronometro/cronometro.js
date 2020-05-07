var seg = document.getElementById('seg')
var segundos = 0
var min = document.getElementById('min')
var minutos = 0
var cronometro
var texto = document.getElementById('iniciar')
var click = 0

function retornarDoisDigitos(tempo){
    if (tempo < 10){
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

function btnIniciar(){
    texto.innerText = 'Iniciar'
    texto.style.color = "#a64aff";
    texto.style.borderColor = "#a64aff";  
}

document.getElementById('iniciar').onclick = function(){
    
    if(click == 0){
        texto.innerText = 'Parar'
        cronometro = setInterval(function(){ contar()},1000)
        click++

        // style:
        texto.style.color ="red";
        texto.style.borderColor = "red";

    }else{        
        clearInterval(cronometro)
        click = 0 
        btnIniciar()    
    }    
}

document.getElementById('zerar').onclick = function(){
    clearInterval(cronometro)
    segundos = 0
    minutos = 0
    seg.innerText = retornarDoisDigitos(0)   
    min.innerText = retornarDoisDigitos(0)
    btnIniciar()      
}