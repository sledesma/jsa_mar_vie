// ActiveRecord 
// Data-Adapter-Object
// 1) Una parte que interactue directamente con el origen de datos (Data)
// 2) Una parte que defina la estructura de esos datos (Object)
// 3) Una parte mediadora que opere en el origen de datos y retorne instancias de un objeto (Adapter)

// D
const CombustiblesDataSource = {

  url: 'combustibles.json',

  loadAll: async function() {
    const res = await fetch(this.url);
    const json = await res.json();
    return json;
  }

};

// O
const CombustibleEntity = {
	sigla: "",
	nombre: "",
	mj_kg: 0,
	kcal_kg: 0,
	obtenerPotencia: function (kg) {
		return this.mj_kg * kg;
	},
	obtenerCalorGenerado: function (kg) {
		return this.kcal_kg * kg;
	},
	obtenerRendimiento: function (kg) {
		return this.obtenerPotencia(kg) / this.obtenerCalorGenerado(kg);
	},
};

// A
const CombustibleAdapter = {

  getAll: async function() {
    const data = await CombustiblesDataSource.loadAll();

    return data.map(function(item){
      const nuevoCombustible = {
        sigla: item.sigla,
        nombre: item.nombre,
        mj_kg: item.mj_kg,
        kcal_kg: item.kcal_kg,
      };
      nuevoCombustible.__proto__ = Combustible;
      return nuevoCombustible;
    });

  }

};

const CombustibleOperaciones = {
  crearTablaRendimientos: function(combustibles, kg) {
    return combustibles
      .map(function (c) {
        return {
          sigla: c.sigla,
          rendimiento: c.obtenerRendimiento(kg),
        };
      })
      .sort(function (a, b) {
        if (a.rendimiento < b.rendimiento) {
          return -1;
        } else if (a.rendimiento > b.rendimiento) {
          return 1;
        } else {
          return 0;
        }
      });
  },
  
  getCombustibleBySigla: function(combustibles, sigla) {
    return combustibles.find(function (val) {
      return val.sigla == sigla;
    });
  }
}


const App = {

  boton: document.querySelector("#btnProcesar"),
  divPotencia: document.querySelector("#potencia"),
  divCalor: document.querySelector("#calor"),
  tipoCombustible: document.querySelector("#tipoCombustible"),
  cantidadKg: document.querySelector("#cantidad"),
  divRecomendado: document.querySelector("#recomendado"),
  divRendimiento: document.querySelector('#rendimiento'),

  combustibles: [],

  load: function() {
    CombustibleAdapter.getAll().then((combustibles) => {
    
      boton.disabled = false;
      this.combustibles = combustibles;
    
      tipoCombustible.addEventListener('change', this.EventCallback);
      cantidadKg.addEventListener('input', this.EventCallback);
      boton.addEventListener("click", this.EventCallback);
  
    });
  },

  EventCallback: function() {
    const kg = Number(this.cantidadKg.value);
    const tablaRendimientos = CombustibleOperaciones.crearTablaRendimientos(this.combustibles, kg);
    const comb = CombustibleOperaciones.getCombustibleBySigla(this.combustibles, this.tipoCombustible.value);
  
    this.divPotencia.innerHTML = "Potencia: " + comb.obtenerPotencia(kg);
    this. divCalor.innerHTML = "Calor: " + comb.obtenerCalorGenerado(kg);
  
    let recomendado = {};
    for (let i = 0; i < tablaRendimientos.length; i++) {
      const rendActual = tablaRendimientos[i];
      if (rendActual.sigla == comb.sigla) {
        this.divRendimiento.innerHTML = 'Rendimiento: '+rendActual.rendimiento
        if (i < tablaRendimientos.length - 1) {
          recomendado = tablaRendimientos[i + 1];
        } else {
          recomendado = rendActual;
        }
      }
    }
  
    this.divRecomendado.innerHTML =
      "Recomendado: " +
      CombustibleOperaciones.getCombustibleBySigla(this.combustibles, recomendado.sigla).nombre + ' (' + recomendado.sigla + ')'
  }
}


App.load();