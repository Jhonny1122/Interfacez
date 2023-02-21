/*Cuando se seleccione cada una de las opciones se va a mostrar las páginas a las que hacen referencia, de esta práctica, en un documento nuevo. 

Crear un menú que tenga las siguientes opciones:
a. García Lorca
b. Formulario
c. España
d. Progreso

*/

$(window).on("load", inicio);

function inicio(){

    $("#menu").menu()

}

$(document).ready(function(){

   $("a.external").click(function() {

      url = $(this).attr("href");

      window.open(url, '_blank');

      return false;

    });
    
});
