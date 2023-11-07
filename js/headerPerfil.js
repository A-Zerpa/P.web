/* document.addEventListener("DOMContentLoaded", function() {
    // Tu código para acceder a los elementos del DOM aquí
    const audioPlayer = document.getElementById('reproductor');
    const audioSource = document.getElementById('cancionSonando');
 
    console.log(audioPlayer);
    console.log(audioSource);
});
*/

  
window.onload = function () {
    let cerrar= document.querySelector('#cerrarSecion');

    let nombreUsuario = window.localStorage.getItem('usuarioIngresado');
    let mensajePerfil= document.querySelector ('#nombreDeUsuario'); 
    mensajePerfil.innerHTML= nombreUsuario;

    cerrar.addEventListener("click",()=>{
        window.localStorage.removeItem('usuarioIngresado');
        
    });


    if(!nombreUsuario){
        mensajePerfil.innerHTML += "Usuario";
     }
    

  
}


