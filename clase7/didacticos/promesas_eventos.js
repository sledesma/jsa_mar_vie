const elemento = document.querySelector('#clickMe');

// 1.
const onElemento = new Promise(function(resolver, rechazar){
  elemento.addEventListener('click', function(){
    resolver();
  })
});

// 2.
onElemento.then(function(){
  console.log('Resuelta')
});

onElemento.catch(function(){
  console.log('Rechazada')
});
