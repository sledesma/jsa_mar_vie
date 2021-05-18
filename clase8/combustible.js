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

loadCombustibles().then(function (combustibles) {
	console.log(crearTablaRendimientos(combustibles, 45));
	console.log(combustibles);
});
