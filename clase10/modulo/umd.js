(function( global, factory ) {

	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Router = factory());

} )(this, function() {

  const router = {
    msj: 'hola mundo'
  }

  return router;
})