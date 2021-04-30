document.querySelectorAll(".requerido input").forEach(function (campo) {
	campo.addEventListener("blur", function () {
		if (campo.value == "") {
			campo.parentElement.className = "requerido invalido";
		} else {
			campo.parentElement.className = "requerido valido";
		}
	});
});
