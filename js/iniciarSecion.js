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

	let usuarioVacio = true;
	let contraniaVacia = true;

	if (!usuario.value) {
		mensaje.innerHTML += "<p>Por favor, ingrese su usuario</p>";
		usuario.focus();
		usuarioVacio = false;
	}


	if (!contraseña.value) {
		mensaje.innerHTML += "<p>Por favor, ingrese su contraseña</p>";
		contraseña.focus();
		contraniaVacia = false;
	}

	if (usuarioVacio && contraniaVacia) {
		formulario.submit();
		/*
		formulario.addEventListener('submit', (e) => {
	
			e.preventDefault(); // Prevenir la acción predeterminada del envío del formulario
		
			// Aquí puedes especificar la URL de destino a la que deseas redirigir
			const urlDestino = "index.html";
		  
			// Redirigir a la página de inicio
			window.location.href = urlDestino;//enviar con el bota otra pagina
		
		})*/
		alert("Validación exitosa");
	}

}
