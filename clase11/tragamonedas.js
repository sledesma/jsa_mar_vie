(function(){
  // 
  const 

    Constantes = { 
      ESTADO_GANONORMAL: 1, 
      ESTADO_GANOGRANPREMIO: 2,  
      ESTADO_SEGUIPARTICIPANDO: -1,
      STORAGE_CANTIDADPERDIDAS: 'TM_CANTIDADPERDIDAS'
    },
    
    opcionesPosibles = [
      { nombre: 'Manzana', porc: 40 },
      { nombre: 'Banana', porc: 70 },
      { nombre: 'Pera', porc: 90 },
      { nombre: '7', porc: 100 }
    ].sort(function(a, b){
      return a.porc > b.porc ? a : b;
    }),
  
    btnJugar = document.querySelector('#btnJugar');


  function Play_Game() {
    // ¿Como se calculan las tres elecciones de la máquina?
    
    const cantPerdidas = 
    sessionStorage.getItem(Constantes.STORAGE_CANTIDADPERDIDAS) === null ? 
    { perdidas: 0 } : JSON.parse(sessionStorage.getItem(Constantes.STORAGE_CANTIDADPERDIDAS));

    const opcionesActuales = [];

    for (let i = 0; i < opcionesPosibles.length; i++) {
      const item = opcionesPosibles[i];
      if(Math.floor(Math.random() * 100) < item.porc) {
        opcionesActuales.push(item.nombre);
        break;
      }
    }

    for (let j = 0; j < opcionesPosibles.length; j++) {
      const item = opcionesPosibles[j];
      if(Math.floor(Math.random() * 100) < item.porc) {
        opcionesActuales.push(item.nombre);
        break;
      }
    }

    for (let k = 0; k < opcionesPosibles.length; k++) {
      const item = opcionesPosibles[k];
      if(Math.floor(Math.random() * 100) < item.porc) {
        opcionesActuales.push(item.nombre);
        break;
      }
    }


    // ¿Que sucede en base a esas tres elecciones?
    let estadoJuego = false;

    if(opcionesActuales[0] == '7' && opcionesActuales[1] == '7' && opcionesActuales[2] == '7') {
      estadoJuego = Constantes.ESTADO_GANOGRANPREMIO
    }
    else if(
      opcionesActuales[0] == opcionesActuales[1] &&
      opcionesActuales[1] == opcionesActuales[2]
    ) {
      estadoJuego = Constantes.ESTADO_GANONORMAL
    } else {
      estadoJuego = Constantes.ESTADO_SEGUIPARTICIPANDO
    }

    
    document.querySelector('#opcion1').innerHTML = opcionesActuales[0]
    document.querySelector('#opcion2').innerHTML = opcionesActuales[1]
    document.querySelector('#opcion3').innerHTML = opcionesActuales[2]

    if(estadoJuego == Constantes.ESTADO_GANOGRANPREMIO) {
      document.querySelector('#estado').innerHTML = 'Ganaste el GRAN premio';
      cantPerdidas.perdidas = 0;
    } else if(estadoJuego == Constantes.ESTADO_GANONORMAL) {
      document.querySelector('#estado').innerHTML = 'Ganaste el juego';
      cantPerdidas.perdidas = 0;
    } else {
      document.querySelector('#estado').innerHTML = 'Segui participando';
      cantPerdidas.perdidas = cantPerdidas.perdidas + 1;
    }

    console.log(cantPerdidas);
    
    if(cantPerdidas.perdidas == 3 ) {
      alert('Vamos pura sangre! Estas cada vez más cerca')
    } else if(cantPerdidas.perdidas == 7) {
      alert('Never pony! Troesma!')
    }

    sessionStorage.setItem(Constantes.STORAGE_CANTIDADPERDIDAS, JSON.stringify(cantPerdidas));

    btnJugar.disabled = true;

    var contador = 3;

    setInterval(function(){
      btnJugar.innerHTML = contador;
      contador -= 1;

      if(contador < 0) {
        window.location.reload();
      }
    }, 1000);

    return {
      estadoJuego,
      opcionesActuales
    }

  }

  btnJugar.addEventListener('click', Play_Game);


  window.Play_Game = Play_Game;

})();
