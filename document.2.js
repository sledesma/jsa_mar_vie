// El DOM soporta POCA cantidad de cambios

/**
 * Nombre: Lista
 * Descripción: Rellenar un elemento ul dado con un array de textos dado
 * Entradas: configuracion: { elemento: DOMElement, entradas: string[] }
 * Salidas: null
 */
function Lista(configuracion) 
{
  // Verificación de tipos
  if(!configuracion.elemento || !configuracion.entradas)
    return;


  /*
  1. Valor
  2. Ubicación de ese valor (en la memoria)

  var: cambiar el valor y su ubicación              (3°)
  let: cambiar el valor, pero no su ubicación       (2°)
  const: no puede cambiar el valor ni su ubicación  (1°)
  */


  const 
    elemento = configuracion.elemento,
    entradas = configuracion.entradas,
    documentFragment = document.createDocumentFragment();

  let
    elAux = null;

  // Pipe (Un conjunto de procesos en donde la entrada de uno es la salida de su predecesor)
  /*
  "Sebastian"
      .replace('S', 'T')
      .toUpperCase()
  */

  entradas
    .map(function(item){ // array => otro array
      elAux = document.createElement('li');
      elAux.innerText = item;
      return elAux;
    })
    .forEach(function(item){ // otro array => console.log
      documentFragment.appendChild(item);
    });

  elemento.appendChild(documentFragment);
  
 /*
  entradas
    .forEach(function(item){ // otro array => console.log
      var elAux = document.createElement('li');
      elAux.innerText = item;
      elemento.appendChild(elAux);
    });
    */
}