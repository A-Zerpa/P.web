
/*main falso*/
window.onload = function () {
	let guardar;

	guardar = document.getElementById("guardar-form");
	guardar.onclick = guardarDatosUsuario;
}


function guardarDatosUsuario() {

	let formulario = document.getElementById("formularioRegistro");
	let mensaje = document.querySelector("#mensaje");

	//restablecer mensaje de error previos
	mensaje.innerHTML = "";

	let errorUsuario = validarUsuario(mensaje);
	let errorContrasena = validarContraseñas(mensaje);
	let errorFecha = validarFecha(mensaje);
	let errorEmail = validarMail(mensaje);


	let error = errorUsuario && errorContrasena && errorFecha && errorEmail;
	if (error) {
		formulario.submit();
		window.location.href = "TPIniciarSesion.html";

	}

}
//Funcion que verifica que el campo de usuario no este vacio y tenga entre 5 y 7 caracteres
function validarUsuario(mensaje) {
	let validar = true;
	let usuario = document.getElementById("usuario").value;

	if (usuario.length == 0) {
		mensaje.innerHTML += "El campo de usuario no puede estar vacío<br>";
		validar = false;
	} else if (!(usuario.length > 4 && usuario.length < 8)) {
		mensaje.innerHTML += "El usuario debe tener entre 5 y 7 carácteres<br>";
		validar = false;
	}

	return validar;

};

//Funcion que verifica que el campo de contraseñas no este vacio y sean iguales
function validarContraseñas(mensaje) {
	let validarContraseñas = true;
	let contraseña = document.getElementById("contraseña").value;
	let contraseñaRepetida = document.getElementById("contraseñaRepetida").value;

	if (contraseña.length == 0) {
		mensaje.innerHTML += "El campo de contraseñas no puede estar vacío<br>";
		validar = false;
	} else if (contraseña !== contraseñaRepetida) {
		mensaje.innerHTML += "Verifique que las contraseñas sean iguales <br>";
		validarContraseñas = false;
	}

	return validarContraseñas;

}

function validarFecha(mensaje) {

	//Formato de fecha esperado
	let regexFecha = /^\d{2}\/\d{2}\/\d{4}$/;
	let validarFecha = true;
	let fecha = document.getElementById("fechaDeNacimiento").value;
	//Se crea un objeto Date y se le asiga la fecha obtenida
	let fechaRefactorizada = new Date(fecha);
	//Los métodos .getDate() y .getMonth() devuelven el día y el mes basados en índices que comienzan en 0
	let dia = fechaRefactorizada.getDate() + 1; // Sumar 1 para obtener el dia correcto
	let mes = fechaRefactorizada.getMonth() + 1;//Sumar 1 para obtener el mes correcto
	let anio = fechaRefactorizada.getFullYear();
	//se formatean el dia y mes, para asegurar que si 1 a 9 , tenga dos digitos
	dia = formatearNumero(dia);
	mes = formatearNumero(mes);
	//Se crea una nueva fecha con el formato de fecha esperado
	let nuevaFecha = dia + "/" + mes + "/" + anio;
	//Si la fecha no coincide con el formato , sale un mensaje de error" y 
	//se cambia la variable validaFecha a false;
	if (!regexFecha.test(nuevaFecha)) {
		mensaje.innerHTML += "Introduzca una fecha válida<br>";
		validarFecha = false;
	} 
	return validarFecha;
}

/*toma un numero como entrada y verifica si es menor que 10.
Si el numero es menor a 10, agrega un 0 inicial. ej: 5 a 05*/
function formatearNumero(num) {
	if (num < 10) {
		return "0" + num;
	} else {
		return num;
	}
}


function validarMail(mensaje) {
	let regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
	let validarMail = true;
	let mail = document.getElementById("email").value;

	if (regexp.test(mail) == 0 || mail.length == 0) {
		mensaje.innerHTML += "Introduzca una direccion de email valida<br>";
		validarMail = false;
	}

	return validarMail;
}







