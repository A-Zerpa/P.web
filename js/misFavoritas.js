window.onload = function () {
   //nombre de usuario
  let input = document.querySelector('#busqueda');
  let botonInput = document.querySelector('#filtrarBoton')
  let borrar= document.querySelector('#borrarBoton')
 
  let cerrar = document.querySelector('#cerrarSecion');

  let nombreUsuario = window.localStorage.getItem('usuarioIngresado');
  let mensajePerfil = document.querySelector('#nombreDeUsuario');
  mensajePerfil.innerHTML = nombreUsuario;

  cerrar.addEventListener("click", () => {
      window.localStorage.removeItem('usuarioIngresado');
  });
  if (!nombreUsuario) {
      mensajePerfil.innerHTML += "Usuario";
  }

  //Logica para el reproductor de musica

  // Primero, selecciona el de audio y su nombre
  var audio = document.querySelector('.grid-main-reproductor audio');
  var cancionNombre = document.querySelector('#nombreDeCancion');
  // Cuando se carga la página, verificamos si hay una canción en el almacenamiento local
  var cancionActual = localStorage.getItem('currentSong');

  if (cancionActual) {
      // Si hay una canción, convierte la cadena de texto almacenada en un objeto
      cancionActual = JSON.parse(cancionActual);
      // Establece el 'src' del  audio 
      audio.src = cancionActual.songUrl;
      // Actualiza el título de la canción
      cancionNombre.textContent = 'Estás escuchando: ' + cancionActual.songName + ' - Álbum: ' + cancionActual.albumName;
  }

  // Selecciona todos los botones de reproducción
  var botonesReproduccion = document.querySelectorAll('.grid-main-canciones-filas button');

  // Para cada botón, añade un controlador de eventos de clic
  botonesReproduccion.forEach(function (boton) {
      boton.addEventListener('click', function () {
          // Aquí es donde especificas la URL de la canción que quieres reproducir.
          // podrías tener un array de URLs de canciones, o añadir un atributo de datos a cada botón con la URL de la canción.
          var urlCancion = boton.getAttribute('data-cancion-url');
          // Aquí es donde obtienes el nombre de la canción.
          // estoy asumiendo que el nombre de la canción está en un elemento <p> hermano del botón.
          var nombreCancion = boton.parentElement.nextElementSibling.querySelector('p').textContent;
          var nombreAlbum = boton.parentElement.nextElementSibling.nextElementSibling.querySelector('p').textContent;
          // Cambia el 'src' del audio y reproduce la canción
          audio.src = urlCancion;
          audio.play();

          // Almacena la información de la canción actual en el almacenamiento local
          localStorage.setItem('currentSong', JSON.stringify({
              songUrl: urlCancion,
              songName: nombreCancion,
              albumName: nombreAlbum
          }));

          // Actualiza el título de la canción
          cancionNombre.textContent = 'Estás escuchando: ' + nombreCancion + ' - Álbum: ' + nombreAlbum;
      });
  });

      // Filtrar canciones o albums
      borrar.addEventListener('click', function() {
        let lista=document.querySelector("#listaDeBusqueda");
        lista.innerHTML = '';
        })

      botonInput.addEventListener('click', function() {
        let valorActual = input.value.toLowerCase();
        // Selecciona todas las filas de canciones
        let filas = document.querySelectorAll('.grid-main-canciones-filas-star');
    
        filas.forEach(function(fila) {
      
        let textoFila = fila.textContent.toLowerCase();
        if (textoFila.includes(valorActual)) {
            let contenido=document.querySelector("#busqueda").value;
            let nodoli=document.createElement("li");
            let nodotexto= document.createTextNode(contenido);
            nodoli.appendChild(nodotexto);
            let lenguaje=document.querySelector("#listaDeBusqueda");
            lenguaje.appendChild(nodoli);
        }});
       });




}
    