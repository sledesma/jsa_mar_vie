/**
 * El Router es una pieza de código que determina
 * el contenido a renderizar por un SPA.
 *
 * Responde a la pregunta:
 *
 * ¿QUE TENGO QUE PONER AHORA EN LA PÁGINA?
 * 
 * 
 * Actualizar los router-view al hacer click en un
 * router-link en base a la url del router-link y
 * el diccionario de rutas pasado.
 * 
 * Eventos importantes
 * Target: [.router-link]
 * Event: click
 * Callback: cargar la ruta correspondiente al .href del clickeado
 * 
 */
function Router(rutas) {

  // 1. Elegimos todos los TARGET
  const links = document.querySelectorAll('.router-link');

  // 2. Para cada uno de ellos...
  links.forEach(function(lnk){

    // 3. Asignamos el click. Al hacer click en un link...
    lnk.addEventListener('click', function(e){
      e.preventDefault();

      // 4. Se busca el contenido asociado en el array de rutas
      const contenido = rutas.find(function(val){
        /**
         * La única salvedad es el .getAttrubute.
         * getAttribute me permite obtener determinado
         * atributo html, pero sin procesar.
         */
        return val.path == lnk.getAttribute('href');
      })

      // 5. Finalmente, mostramos dicho contenido en cada router-view
      document.querySelectorAll('.router-view').forEach(function(vw){
        vw.innerHTML = contenido.render;
      })

    });

  })

}
