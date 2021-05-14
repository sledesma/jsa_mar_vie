// 1.
const loadFile = new Promise(function(resolver, rechazar){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'archivo.js');
  xhr.send();
  xhr.addEventListener('load', function(){
    resolver(xhr.response);
  });
});

// 2.
loadFile
  .then(function(respuesta){
    const script = document.createElement('script');
    script.innerText = respuesta;
    document.body.appendChild(script);
  })
  .catch(function(){

  });