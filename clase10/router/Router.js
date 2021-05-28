const RouteMetadata = {};

// ESCRIBIR LOS DATOS DE CADA RUTA
function Route(ruta, entryPoint, baseClass) {
  RouteMetadata[baseClass] = {
    ruta: ruta,
    entryPoint: entryPoint
  };

  return baseClass;
}

// LEER Y PROCESAR LOS DATOS DE CADA RUTA
class Router {
  constructor(routes) {
    this.routes = routes;

    this.navigate('/contacto');
  }

  navigate(path) {
    const finded = this.routes.find(function(item){
      return RouteMetadata[item].ruta == path;
    });

    const object = new finded();

    console.log(object);

    object[RouteMetadata[finded].entryPoint]();
  }
}