//main falso
window.onload = function () {
	let guardar;

	guardar = document.getElementById("guardar-form");
	guardar.onclick = guardarDatosUsuario;
}



function guardarDatosUsuario() {

	let formulario = document.getElementById("formularioRegistro");

	console.log(validarFecha());
	
	if (validarUsuario() && validarContraseñas() && validarMail() && validarFecha()) {
		formulario.submit();
		alert("Validación exitosa");
	}

}

function validarFecha(){
	let regexFecha = /^(0[1-9]|[12][0-9]|3[01])[-./](0[1-9]|1[0-2])[-./](\d{4})$/;
	let validarFecha=true;
	let fecha=document.getElementById("fechaDeNacimiento").value;
console.log("fecha: " + fecha);

	if(regexFecha.test(fecha) == 0 || fecha.length ==0){
		alert ("Introduzca una fecha válida");
		fecha.focus();
		validarFecha=false;
	}

	return validarFecha;
}

function validarMail(){
	let regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
	let validarMail=true;
	let mail=document.getElementById("email").value;

	if(regexp.test(mail) ==0 || mail.length == 0){
		alert("Introduzca una direccion de email valida");
		mail.focus();
		validarMail=false;
	}

	return validarMail;
}


function validarUsuario() {
	let validar = true;
	let usuario = document.getElementById("usuario").value;
	
	
	if (!(usuario.length >4 && usuario.length <8)) {
		alert("El usuario debe tener entre 5 y 7 carácteres");
		usuario.focus();
		validar = false;
	}

	return validar;

}

function validarContraseñas() {
	let validarContraseñas = true;
	let contraseña = document.getElementById("contraseña").value;
	let contraseñaRepetida= document.getElementById("contraseñaRepetida").value;

	if (contraseña !== contraseñaRepetida) {
		alert("Verifique que las contraseñas sean iguales");
		contraseña.focus();
		validarContraseñas = false;
	}

	return validarContraseñas;

}




