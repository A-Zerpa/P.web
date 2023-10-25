window.onload = function () { 
	let iniciar;
	
	iniciar = document.getElementById("formularioIngresar");
	iniciar.onclick = iniciarSecion;
}



function iniciarSecion () {

	let validar = true;
	
	let formulario = document.getElementById ("formularioIngresar");
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




