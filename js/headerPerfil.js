document.addEventListener("DOMContentLoaded", function() {
    // Tu código para acceder a los elementos del DOM aquí
    const audioPlayer = document.getElementById('reproductor');
    const audioSource = document.getElementById('cancionSonando');
 
    console.log(audioPlayer);
    console.log(audioSource);
});


  
window.onload = function () {
    let cerrar= document.querySelector('#cerrarSecion');

    let nombreUsuario = window.localStorage.getItem('usuario');
    document.querySelector('#nombreDeUsuario').innerHTML= nombreUsuario;

    cerrar.onclick= cerrarUsuario;

}
    


 
/*
    if (cerrarUsuario()==false){
    document.querySelector('#nombreDeUsuario').innerHTML= "nombre de usuario";



const audioplayer=document.getElementById('cancionSonando');

audioplayer.addEventListener('play', function() {
const currentSong=audioplayer.src;
localStorage.setItem('currentSong', currentSong);
});

const songDisplayElement =document.getElementById('cancionSonando');

const currentSonga=localStorage.getItem('currentSong');
if (currentSonga){
    songDisplayElement.textContent= 'cancion actual: ' + currentSonga;
    
}else{
    songDisplayElement.textContent= ' no se';
}

*/

 

function cerrarUsuario(){
 window.localStorage.clear()

}

