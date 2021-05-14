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
    return resBerry.json();
  })
  .then(function(datos){
    console.log(datos);
  });