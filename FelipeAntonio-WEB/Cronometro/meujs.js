var segundos = 0, minutos = 0, horas = 0;
var seg=document.getElementById("seg") 
var min=document.getElementById("min") 
var hou=document.getElementById("hou") 

var time = setInterval(function(){
    if(valor.innerText=="Parar"){
         if(segundos==59){
             segundos=0;
              seg.innerText="00"
              if(minutos==59){
                  min.innerText="00"
                  minutos=0
                  if(horas==59){
                      hou.innerText="00"
                      min.innerText="00"
                      seg.innerText="00"
                      horas=0
                      minutos=0
                      segundos=0
                  }else{
                      horas++
                      if(horas>=10){
                          hou.innerText=horas
                      } else{
                          hou.innerText="0"+horas
                      }
                  }
              }else{
                  minutos++;
                  if(minutos>=10){
                      min.innerText=minutos
                  } else{
                      min.innerText="0"+minutos
                  } 
                  
              }
         }else{
              segundos++;
              if(segundos>=10){
                  seg.innerText=segundos
              } else{
                  seg.innerText="0"+segundos
              }
               
         }
    } 
      },1000)


function cronometro(id){
    valor=document.getElementById(id)
    if(valor.innerText=="Parar"){
        valor.innerText="Iniciar"
    }else if(valor.innerText=="Iniciar"){
       valor.innerText="Parar" 
       
    }
    
    time
  
    if(id=="zerar"){
        hou.innerText="00"
        min.innerText="00"
        seg.innerText="00"
        horas=0
        minutos=0
        segundos=0
        document.getElementById('Iniciar').innerText="Iniciar"
            
    } 

         
     
}

