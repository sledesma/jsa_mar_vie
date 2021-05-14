/**
 * API Fetch
 * (aporta al ambito global)
 * F (funciones): fetch (1°)
 * E (eventos): "fetch" (API ServiceWorker) (2°)
 * O (objetos): Request, Response (3°)
**/


/**
 * Nombre: fetch
 * Descripción: Transforma un Request en un Response
 * Parametros: Request
 * Retorno: Promesa que resuelve en un Response
 */
// fetch(Request) -> Promise<Response>

fetch('https://pokeapi.co/api/v2/berry/') // = PROMESA
  .then(function(resBerry){ // = FUNCION -> PROMESA
    return resBerry.json(); // Tengo una PROMESA que cuando esta resuelta me da el JSON
  })
  .then(function(datos){
    console.log(datos);
  });


// ASYNC / AWAIT es una sintaxis alternativa
// PARA PROMESAS QUE NO SE RECHAZAN

function sumar(n1, n2) {
  const suma = n1 + n2;
  return suma;
}
/*
function asyncSumar(n1, n2) {
  return new Promise(function(resolver){
    const suma = n1 + n2;
    resolver(suma);
  });
}
*/
async function asyncSumar(n1, n2) {
  const suma = n1 + n2;
  return suma;
}

async function asyncPromedio(n1, n2) {
  const suma = await asyncSumar(n1, n2);
  // A ESTA LINEA
  return suma / 2;
}

(async function() {

  const txtNumeros = prompt('Ingrese dos numeros separados por coma'); 
  const arrNumeros = txtNumeros.split(',');
  const n1 = Number(arrNumeros[0]);
  const n2 = Number(arrNumeros[1]);

  const prom = await asyncPromedio(n1, n2);

  console.log(prom);
  
})()