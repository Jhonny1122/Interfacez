/*
Con los ficheros html de la práctica 1 de este tema genera un documento HTML con pestañas, 

en cada pestaña se va a visualizar el contenido de uno de los ficheros de esa práctica.
*/

$(window).on("load", inicio);

function inicio(){

    $("#pesta").tabs({

        event:"mouseover"

    });
}