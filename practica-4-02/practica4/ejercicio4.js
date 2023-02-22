/*
Vamos a poner una cajas de texto con el literal tiempo de incremento y un botón de inicio, 

al pulsar dicho botón realizaremos una barra de progreso que va a tardar en completarse el tiempo establecido en la caja de texto.

*/

var contador;

$(window).on("load", inicio);

function inicio(){

    $("#boton").click(function () { 

        let tiempo = document.getElementById("tiempo").value;

        let mitiempo=parseInt(tiempo,10)*1000/100;

        console.log(tiempo);
        
        $("#barra").progressbar({

            value:1,
    
            change:function(){
    
                $(".mensaje-barra").text( $("#barra").progressbar("value")+"%");
    
            },
    
            complete:function(){
    
                $(".mensaje-barral").text("Complete!");
     
                clearIntercal(contador);
    
    
            }
    
        });

        
        
        contador=setInterval(sigue,mitiempo);
        
    });

}
function sigue(){

            var valor=$("#barra").progressbar("value");
        
            $("#barra").progressbar("value", valor +1);
        
        }