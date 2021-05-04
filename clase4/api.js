/**
 * Ejecuta una petición AJAX
 * @param opciones.url - URL de la petición
 * @param opciones.onLoad - Callback del load de la petición
 * @param opciones.method - Mpetodo de la petición
 * @param opciones.responseType - Tipo de respuesta
 */
function ajax(opciones) {

  const
    url = opciones.url, 
    load_callback = opciones.onLoad, 
    metodo = opciones.method, 
    tipo = opciones.responseType;

  const xhr = new XMLHttpRequest();
  xhr.open(metodo, url);
  xhr.responseType = tipo;
  xhr.send();
  xhr.onload = function(){
    load_callback(xhr.response, xhr);
  };

}


