async function get(uri) {
  const res = await fetch(uri);
  const json = await res.json();
  return json;
}

async function queryBerry() {

  let 
    berrys = await get('https://pokeapi.co/api/v2/berry/')
    berrys = berrys.results,
    resultado = [];

  for (let i = 0; i < berrys.length; i++) {
    const berry = berrys[i];
    const outputBerry = {
      name: berry.name
    };
    
    const berryData = await get(berry.url);

    const firmnessData = await get(berryData.firmness.url);

    outputBerry.firmness = {}

    for (let j = 0; j < firmnessData.names.length; j++) {
      const lang = firmnessData.names[j];
      
      outputBerry.firmness[lang.language.name] = lang.name
    }

    resultado.push(outputBerry);
  }

  return resultado;

}


queryBerry().then(function(berrys){
  console.log(berrys);
})
/*
==> [
  {
    name: 'chesto',
    firmness: {

    }
  }
]
*/