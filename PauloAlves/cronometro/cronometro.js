var hora = 0;
var minuto = 0;
var segundo = 0;
var intervalo;
var relogio = document.getElementById("relogio");

function rodando(){
    if(intervalo!=null){//eh pq era pra pausar!
       clearInterval(intervalo);
       intervalo = null;
       document.getElementById("iniciarpausar").innerText = "Iniciar";
    }else{//iniciou
        intervalo = setInterval(function (){incrementaRelogio()},1000);
        document.getElementById("iniciarpausar").innerText = "Pausar";
    }
}
function reiniciado(){
    hora = 0;
    minuto = 0;
    segundo = 0;
    if(intervalo !=null){
      clearInterval( intervalo);
      intervalo = null;
    }
    document.getElementById("iniciarpausar").innerText = "Iniciar";
    organizaRelogio(hora,minuto,segundo);
}
function organizaRelogio(h,m,s){
    let horaT = h<=9?"0"+h.toString():h.toString();
    let minutoT = m<=9?"0"+m.toString():m.toString();
    let segundoT = s<=9?"0"+s.toString():s.toString();
    relogio.innerText = horaT+":"+minutoT.toString()+":"+segundoT.toString();
}
function incrementaRelogio(){
    segundo+=1;
    if(segundo>=60){
        minuto+=1;
        segundo=0;
    }
    if(minuto>=60){
        hora+=1;
        minuto=0;
    }
    organizaRelogio(hora,minuto,segundo);
}