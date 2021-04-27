/*
 * Nombre: API Document - DOM (Document Object Model)
 * Casos de uso: Manejar el documento HTML en donde está incluido este script
 * F (funciones): -
 * E (eventos): DOMContentLoaded (muy específico)
 * O (objetos): document
 * (... que aporta al ámbito global)
**/
// console.log(document);

// R (Read) - LECTURA
var app = document.querySelector('#app');

var elemento = document.querySelector('*[data-s-mensaje]'); // DOM Element
var elementoDataSet = elemento.dataset; // DOMStringMap (conjunto de parametros del DOM)
var elementoSMensaje = elementoDataSet.sMensaje; // (string)

console.log(elementoSMensaje);


// C (Create), U (Update) y D (Delete) - ESCRITURA
var miBoton = document.createElement('button'); // DOM Element
miBoton.innerText = "Haceme click";
app.appendChild(miBoton);


