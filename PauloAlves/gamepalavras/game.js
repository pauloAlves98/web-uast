    var nivel = 1;
    var palavras = [];
    var ntempo = 15;
    var tempo = null; 
    var QUANTPALAVRAS = 5;  

    $(function(){
        $("#verpalavra").attr("disabled", true)

        $("#digitarpalavra").on("keyup",function(){
            if(palavras.length>0 && $("#digitarpalavra").val().toUpperCase()===palavras[0].toUpperCase()){//verifica se foi digitado correto
                $("#resultado").text("Correto");
                $("#resultado").show();
                setTimeout(function (){ $("#resultado").hide()},500)
                palavras. splice(0, 1);//remove o item
                $("#verpalavra").val(palavras[0])
                $("#digitarpalavra").val("")
                $("#restante").text(palavras.length.toString())
            }
        })

        $("#iniciar").on("click",function(){
            reset();
            buscarpalavras(QUANTPALAVRAS);
        });

        function verificaseganhou(){
            if(palavras.length==0&&ntempo>0){
                alert("Proximo Nivel!")
                clearInterval(tempo) 
                proxnivel();//abrir 
            }else if(palavras.length>0 && ntempo<=0){//se ainda restar palavras e o tempo acabar
                alert("Tente Novamente: Nivel alcançado: "+nivel)
                clearInterval(tempo)
                reset();
                console.log("Condicao 2")
            }
            else{
                decrementatempo();
                console.log("Condicao 3")
            }
        }
        function buscarpalavras(qnt){
            $.ajax({
             method:'GET',
             url:'https://cors-anywhere.herokuapp.com/https://gerador-nomes.herokuapp.com/nomes/'+qnt.toString(),//api
             success:function(data,textStatus){
                palavras = data;
                console.log(palavras)
                $("#verpalavra").val(palavras[0])
                $("#restante").text(palavras.length.toString())
                if(tempo!=null)
                    clearInterval(tempo);
                tempo = setInterval(function(){
                    verificaseganhou();
                    
                },1000);
             }
         }).fail(function(jqXHR, textStatus, msg){
                 alert("Error ao buscar palavras: "+textStatus);
         }); 
        }

        function decrementatempo(){ 
           ntempo =  ntempo-1<=0?0:ntempo-1;
           setTempo();
        }

        function setTempo(){
            $('#cronometro').text(ntempo.toString()+"s")   
            // if(ntempo==0)
            //     clearInterval(tempo)    
        }

        function reset(){
            nivel = 1
            palavras = []
            tempo = null;
            ntempo = 30;
            QUANTPALAVRAS = 5;
            $('#cronometro').text(ntempo.toString()+"s");
            $("#verpalavra").val("");
            $("#restante").text(palavras.length.toString())
            $("#digitarpalavra").val("")
            
        }
        function proxnivel(){//passar incremento
            nivel += 1;
            palavras = []
            tempo=null;
            ntempo = 30;
            QUANTPALAVRAS = 5+nivel;
            $('#cronometro').text(ntempo.toString()+"s");
            $("#verpalavra").val("");
            $("#restante").text(palavras.length.toString())
            $("#digitarpalavra").val("")
            buscarpalavras( QUANTPALAVRAS );
        }
        reset();
        // $.get("https://gerador-nomes.herokuapp.com/nomes/45",function(data,status){
        //     alert("Data: " + data + "\nStatus: " + status);
        // });
    })//fim jquery