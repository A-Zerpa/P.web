window.onload = function () {
/*
let filtroSeleccionado = document.getElementById("filtro");
let busquedaInput = document.getElementById("busqueda");
let filtrarButton = document.getElementById("filtrarBoton");


let canciones = document.querySelectorAll(".cancion");
let albums = document.querySelectorAll(".album");

filtrarButton.addEventListener("click", function() {
    let resultadoDelfiltro=document.querySelector("#filtro").value;
    let textoBusqueda = busquedaInput.value.toLowerCase();

    let filas = document.querySelectorAll('.grid-main-canciones-filas-star');

    if (resultadoDelfiltro === "cancion") {
        canciones.forEach(function(cancion) { 
            console.log(cancion);
            let nombreCancion = cancion.textContent.toLowerCase();
        
            if (nombreCancion.includes(textoBusqueda)) {
                cancion.parentElement.style.display = '';
              } else {
                cancion.parentElement.style.display = "none";
              }
        if (resultadoDelfiltro === "album") {
           albums.forEach(function (album) {
            let nombreAlbum = album.textContent.toLowerCase();
  
            if (nombreAlbum.includes(textoBusqueda)) {
            album.parentElement.style.display = ' ';
          } else {
            album.parentElement.style.display = "none";
          }


   
        })
      }

    })

}})} 

*/
// Primero, selecciona el input donde el usuario escribe para filtrar
let input = document.querySelector('#busqueda');

// Luego, añade un event listener para el evento 'input' en ese input
input.addEventListener('input', function() {
    // Obtén el valor actual del input (en minúsculas para evitar problemas de mayúsculas y minúsculas)
    let valorActual = input.value.toLowerCase();

    // Selecciona todas las filas de canciones
    let filas = document.querySelectorAll('.grid-main-canciones-filas-star');

  // Itera sobre cada fila
    filas.forEach(function(fila) {
    // Obtén el texto del artista o álbum de la fila (también en minúsculas)
    let textoFila = fila.textContent.toLowerCase();

    // Si el texto del artista o álbum incluye el valor actual del input, muestra la fila, si no, ocúltala
    if (textoFila.includes(valorActual)) {
        
        fila.style.display = '';
    } else {
        fila.style.display = 'none';
    }
});
});}