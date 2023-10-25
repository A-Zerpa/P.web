window.onload = function () { 
	let iniciar;
	
	iniciar = document.getElementById("iniciar-sesion");
	iniciar.onclick = iniciarSecion;
}



function iniciarSecion () {

	let validar = true;
	
	let formulario = document.getElementById ("formularioInicio");
	let usuario = document.getElementById ("usuario");

    let validarContraseña=true;
    let contraseña = document.getElementById ("contraseña");
	
	if (!usuario.value) {
		alert ("Por favor, ingrese su usuario");
		usuario.focus();
		validar = false;
	}
		
	
	if (!contraseña.value) {
		alert ("Por favor, ingrese su contraseña");
		contraseña.focus();
		validarContraseña = false;
	}
		
	if (validarContraseña && validar) {
		formulario.submit();
		alert ("Validación exitosa");
	}



}
