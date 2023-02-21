$(window).on('load', calendario);
$(window).on('load', ventana);
$(window).on('load', boton);
$(window).on('load', desplegable);
$(window).on('load', completo);

// La fecha se adquiera con un calendario de jQueryUI.
function calendario() {
    $( "#nacimiento" ).datepicker();
}

// Cuando nos situemos sobre cada uno de los controles nos muestre una ventana de ayuda.
function ventana() {
    $(document).tooltip();
}

// El botón de Enviar se diseña como un botón de jQueryUI.
// La barra de las Horas semanales de trabajo, será una barra de jQueryUI(Se aplica tambien con el codigo de abajo a la barra).
function boton(){
    $("#enviar").button();
    $("#limpiar").button();
}

// La comunidad autónoma será una lista desplegable de jQueryUI.
function desplegable(){
    $( "#comunidades" ).accordion();
}

// Cuando nos situemos sobre la caja de texto del Nombre o de los Apellidos mostraremos un cuadro de diálogo con 
// dos cajas de texto para esos valores y al pulsar el botón de Aceptar copiaremos esos
// valores a las cajas de texto del formulario.

function completo(){

    $("#dialogo").hide();

    $("#nombre , #apellidos").mouseover(function () { 
       
        dialogo();

        nuevo();
    });

}

function dialogo(){
 
    $("#dialogo").dialog({
        
        autoOpen:false,
        
        buttons:{
        
            Cancelar:function(){
        
                $(this).dialog("close");
        
            },
        
            Aceptar:function(){
        
                $("#nombre").val($("#nombre_f").val());
        
                $("#apellidos").val($("#ape").val());
        
                $(this).dialog("close");

            }    
        
        }
        
    });
}

function nuevo(){
    
    $("#dialogo").dialog("open");
    
}


