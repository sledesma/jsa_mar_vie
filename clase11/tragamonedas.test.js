(function(){

  let res = [];
  for (let i = 0; i < 10000; i++) {
    res.push(Play_Game());    
  }

  console.log(res);
  const cantPerdidas = res.reduce((prev, act) => {
    if(act.estadoJuego == -1) {
      return prev + 1;
    } else {
      return prev
    }
  }, 0);
  console.log('Cantidad de veces que pierde', cantPerdidas);

  const cantGanancias = res.reduce((prev, act) => {
    if(act.estadoJuego == 1) {
      return prev + 1;
    } else {
      return prev
    }
  }, 0);
  console.log('Cantidad de veces que gana', cantGanancias);

  const cantSuperGanancias = res.reduce((prev, act) => {
    if(act.estadoJuego == 2) {
      return prev + 1;
    } else {
      return prev
    }
  }, 0);
  console.log('Cantidad de veces que gana 777 ', cantSuperGanancias);


})()
