window.onload = function () {
   let input = document.querySelector('#busqueda');
   let botonInput = document.querySelector('#filtrarBoton')
   let borrar= document.querySelector('#borrarBoton')
  

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
    