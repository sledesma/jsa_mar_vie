/**
 * Tipos de Combustibles
 **/
const Combustible = {
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

function CombustibleFactory(sigla, nombre, mj_kg, kcal_kg) {
	const nuevoCombustible = {
		sigla: sigla,
		nombre: nombre,
		mj_kg: mj_kg,
		kcal_kg: kcal_kg,
	};
	nuevoCombustible.__proto__ = Combustible;
	return nuevoCombustible;
}

async function loadCombustibles() {
	const res = await fetch("combustibles.json");
	const json = await res.json();

	return json.map(function (val) {
		return CombustibleFactory(
			val.nombre.toUpperCase().substring(0, 3),
			val.nombre,
			val.mj_kg,
			val.kcal_kg
		);
	});
}

function crearTablaRendimientos(combustibles, kg) {
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
}

function getCombustibleBySigla(combustibles, sigla) {
	return combustibles.find(function (val) {
		return val.sigla == sigla;
	});
}

loadCombustibles().then(function (combustibles) {
	const boton = document.querySelector("#btnProcesar"),
		divPotencia = document.querySelector("#potencia"),
		divCalor = document.querySelector("#calor"),
		tipoCombustible = document.querySelector("#tipoCombustible"),
		cantidadKg = document.querySelector("#cantidad"),
		divRecomendado = document.querySelector("#recomendado"),
    divRendimiento = document.querySelector('#rendimiento');

	boton.disabled = false;

  tipoCombustible.addEventListener('change', function () {
		const kg = Number(cantidadKg.value);
		const tablaRendimientos = crearTablaRendimientos(combustibles, kg);
		const comb = getCombustibleBySigla(combustibles, tipoCombustible.value);

		divPotencia.innerHTML = "Potencia: " + comb.obtenerPotencia(kg);
		divCalor.innerHTML = "Calor: " + comb.obtenerCalorGenerado(kg);

		let recomendado = {};
		for (let i = 0; i < tablaRendimientos.length; i++) {
			const rendActual = tablaRendimientos[i];
			if (rendActual.sigla == comb.sigla) {
        divRendimiento.innerHTML = 'Rendimiento: '+rendActual.rendimiento
				if (i < tablaRendimientos.length - 1) {
					recomendado = tablaRendimientos[i + 1];
				} else {
					recomendado = rendActual;
				}
			}
		}

		divRecomendado.innerHTML =
			"Recomendado: " +
			getCombustibleBySigla(combustibles, recomendado.sigla).nombre + ' (' + recomendado.sigla + ')'
	});

  cantidadKg.addEventListener('input', function () {
		const kg = Number(cantidadKg.value);
		const tablaRendimientos = crearTablaRendimientos(combustibles, kg);
		const comb = getCombustibleBySigla(combustibles, tipoCombustible.value);

		divPotencia.innerHTML = "Potencia: " + comb.obtenerPotencia(kg);
		divCalor.innerHTML = "Calor: " + comb.obtenerCalorGenerado(kg);

		let recomendado = {};
		for (let i = 0; i < tablaRendimientos.length; i++) {
			const rendActual = tablaRendimientos[i];
			if (rendActual.sigla == comb.sigla) {
        divRendimiento.innerHTML = 'Rendimiento: '+rendActual.rendimiento
				if (i < tablaRendimientos.length - 1) {
					recomendado = tablaRendimientos[i + 1];
				} else {
					recomendado = rendActual;
				}
			}
		}

		divRecomendado.innerHTML =
			"Recomendado: " +
			getCombustibleBySigla(combustibles, recomendado.sigla).nombre + ' (' + recomendado.sigla + ')'
	});

	boton.addEventListener("click", function () {
		const kg = Number(cantidadKg.value);
		const tablaRendimientos = crearTablaRendimientos(combustibles, kg);
		const comb = getCombustibleBySigla(combustibles, tipoCombustible.value);

		divPotencia.innerHTML = "Potencia: " + comb.obtenerPotencia(kg);
		divCalor.innerHTML = "Calor: " + comb.obtenerCalorGenerado(kg);

		let recomendado = {};
		for (let i = 0; i < tablaRendimientos.length; i++) {
			const rendActual = tablaRendimientos[i];
			if (rendActual.sigla == comb.sigla) {
        divRendimiento.innerHTML = 'Rendimiento: '+rendActual.rendimiento
				if (i < tablaRendimientos.length - 1) {
					recomendado = tablaRendimientos[i + 1];
				} else {
					recomendado = rendActual;
				}
			}
		}

		divRecomendado.innerHTML =
			"Recomendado: " +
			getCombustibleBySigla(combustibles, recomendado.sigla).nombre + ' (' + recomendado.sigla + ')'
	});
});
