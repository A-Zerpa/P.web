//funcion window.onload verifica que 1ro se cargue toda la pagina y luego ejecuta el js
//function () es una funcion anonima que engloba el resto

window.onload = function () {
	let iniciar;
	
	iniciar = document.getElementById("iniciar-sesion");
	iniciar.onclick = iniciarSesion;
}


//Funcion que valida que los campos de usuario y contraseña no esten vacios
function iniciarSesion() {

	

	let formulario = document.getElementById("formularioInicio");
	let usuario = document.getElementById("usuario");
	let contraseña = document.getElementById("contraseña");
	let mensaje = document.querySelector("#mensaje");

	//restablecer mensaje de error previos
	mensaje.innerHTML = "";

	let usuarioVacio = false;
	let contraniaVacia = false;

	if (!usuario.value) {
		mensaje.innerHTML += "<p>Por favor, ingrese su usuario</p>";
		usuario.focus();
		usuarioVacio = true;
	}


	if (!contraseña.value) {
		mensaje.innerHTML += "<p>Por favor, ingrese su contraseña</p>";
		contraseña.focus();
		contraniaVacia = true;
	}

	if (!usuarioVacio && !contraniaVacia) {
		formulario.submit();
		window.location.href = "index.html";
		mostrarnombreUsuario();
	}

}

function mostrarnombreUsuario(){
	let nombreUsuario = document.getElementById("usuario");
	window.localStorage.setItem('usuario', nombreUsuario.value);
}