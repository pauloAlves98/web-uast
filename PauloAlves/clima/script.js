
        var busca = document.getElementById('linput');
        var resultado = document.getElementById('resultado');
        var urlpre = 'https://api.openweathermap.org/data/2.5/weather?q=';
        var urlpos ='&APPID=05e9cd67c1f8e393a887ed268d0112fd&units=metric';
        var ajax = new XMLHttpRequest();
        

        ajax.onreadystatechange = function(e){
            if(ajax.readyState===4 && ajax.status==200){
                //tudo ok
                let saida =JSON.parse(ajax.responseText);
                resultado.innerText = ""+busca.value.toString().toUpperCase()+": "+saida.main.temp.toString()+" Cº";
            }else if(ajax.readyState===4 && ajax.status!=200){
                let saida =JSON.parse(ajax.responseText);
                resultado.innerText = "Nenhum Registro encontrado para: "+busca.value;
            }
        }
        function buscar(){
            ajax.open("GET",urlpre+busca.value+urlpos);
            ajax.send(null);
        }