var segundos = 0;
var minutos = 0;
var hora = 0;
var tempo = document.getElementById('tempo');
var acao = document.getElementById('play');
var intervalo;

function iniciarParar(){
    if(acao.innerText == "Iniciar"){
        acao.innerText = "Pausar";
        acao.style.border = "solid 1px yellow"
        acao.style.color = "yellow"
        intervalo = setInterval('contar()',1000)
    }else{
        acao.innerText = "Iniciar";
        acao.style.border = "solid 1px green"
        acao.style.color = "green"
        clearInterval(intervalo);
    }
}

function parar(){
    acao.innerText = "Iniciar";
    acao.style.border = "solid 1px green"
    acao.style.color = "green"
    clearInterval(intervalo);
    tempo.innerText = "00:00:00";;
}

function contar(){
    
    segundos++;
    if(segundos>59){
        segundos = 0;
        minutos++;
    }
    if(minutos>59){
        minutos = 0;
        hora++;
    }    

    tempo.innerText = addZero(hora)+":"+addZero(minutos)+":"+addZero(segundos)
}

function addZero(valor){
    if(valor<10){
        return "0"+valor
    }
    return valor;
}