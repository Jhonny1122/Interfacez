if (document.addEventListener){

	window.addEventListener("load",iniciar)

}
else if (document.attachEvent){

	window.attachEvent("onload", iniciar);

}

function iniciar(){

	let boton= document.getElementById("enviar");

	if (document.addEventListener){

		boton.addEventListener("click", validaciones);

	}
	else if (document.attachEvent){

		boton.attachEvent("onclick",validaciones);

	}
}

function validaciones (){

    let envio;

    let ok_nombre=val_nombre();

    let ok_apellido=val_apellido();

    let ok_telf=val_telefono();

    let ok_contra=val_contrasena();

    let ok_pagina=val_pagina();

    let ok_correo=val_correo();

    let ok_sueldo=sueldo();

    if(ok_nombre && ok_apellido && ok_telf && ok_contra && ok_pagina && ok_correo && ok_sueldo)

        envio = true;
    
    if(envio)

        alert("Felicidades, estan los datos  correctos!!!!!!");

}

//********  Validacion del campo nombre ********//
function val_nombre(){

    let valido = true;

    let valor_campo = document.getElementById("nombre").value;

    let regExp = /^[a-zA-Z]{1}[a-zA-Z -.ªº]{2,23}[a-zA-Z]{1}$/;

    if (!regExp.test(valor_campo)) {

        document.getElementById("nombre_error").value = "Error. El campo del nombre deberá empezar y terminar por una letra y un mínimo de tres caracteres y un máximo de 25";

        document.getElementById("nombre_error").hidden=false;

        valido = false;
    }
    else {

        document.getElementById("nombre_error").hidden = true;
    }

    return valido;

}

//********  Validacion del campo apellido ********//
function val_apellido(){

    let valido = true;

    let valor_campo = document.getElementById("apellidos").value;

    let regExp = /^[a-zA-Z]{1}[a-zA-Z -.]{4,28}[a-zA-Z]{1}$/;

    if (!regExp.test(valor_campo)) {

        document.getElementById("apellidos_error").value = "Error. El campo de los apellidos deberá empezar y terminar por una letra y un mínimo de seis caracteres y un máximo de 30";

        document.getElementById("apellidos_error").hidden=false;

        valido = false;
    }
    else {

        document.getElementById("apellidos_error").hidden = true;
    }

    return valido;

}

//********  Validacion del campo telefono ********//
function val_telefono(){

    let valido = true;

    let valor_campo = document.getElementById("telf").value;

    let regExp = /^[6]{1}\d{8}$|^[7]{1}\d{8}$|^[8]{1}\d{8}$|^[9]{1}\d{8}$/;

    if (!regExp.test(valor_campo)) {

        document.getElementById("telf_error").value = "Error. El campo del teléfono deberá de tener nueve dígitos y deberán de empezar por 6, 7, 8 o 9.";

        document.getElementById("telf_error").hidden=false;

        valido = false;
    }
    else {

        document.getElementById("telf_error").hidden = true;
    }

    return valido;

}

//********  Validacion del campo contraseña ********//
function val_contrasena(){

    let valido = true;

    let valor_campo = document.getElementById("contra").value;

    let regExp = /^[A-Za-z0-9 .-@]{4,8}$/;

    if (!regExp.test(valor_campo)) {

        document.getElementById("contra_error").value = "Error. El campo de la contraseña deberá tener entre 8 y 14 caracteres.";

        document.getElementById("contra_error").hidden=false;

        valido = false;
    }
    else {

        document.getElementById("contra_error").hidden = true;
    }

    return valido;

}

//********  Validacion del campo pagina ********//
function val_pagina(){

    let valido = true;

    let valor_campo = document.getElementById("web").value;

    let regExp = /^[w]{3}[.]{1}[a-zA-Z0-9./@#()]{1,30}[.]{1}[com|es]{2,3}$/;

    if (!regExp.test(valor_campo)) {

        document.getElementById("web_error").value = "Error. No son valores correctos para esos campos.";

        document.getElementById("web_error").hidden=false;

        valido = false;
    }
    else {

        document.getElementById("web_error").hidden = true;
    }

    return valido;

}

//********  Validacion del campo correo ********//
function val_correo(){
    
    let valido = true;

    let valor_campo = document.getElementById("correo").value;

    let regExp = /^[a-zA-z0-9]{3,15}[@]{1}[a-z]{4,10}[.]{1}[com]{3}|^[a-zA-z0-9]{3,15}[@]{1}[a-z]{4,10}[.]{1}[es]{2}$/;

    if (!regExp.test(valor_campo)) {

        document.getElementById("correo_error").value = "Error. No son valores correctos para esos campos.";

        document.getElementById("correo_error").hidden=false;

        valido = false;
    }
    else {

        document.getElementById("correo_error").hidden = true;
    }

    return valido;

}

//********  Operacion sueldo ********//
function sueldo (){

    let hora_semanal = document.getElementById("hora_semanal").value;

    let hora_precio = document.getElementById("hora_precio").value;

    let sueldo_total = hora_semanal * hora_precio;

    document.getElementById("sueldo").value = sueldo_total;

    return true;

}