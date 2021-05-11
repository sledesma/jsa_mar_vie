/**
 * Link: .hash-link
 * Vistas: .hash-view
 * Diccionario de rutas:
 */

// 1. Variables compartidas en todo el router
const __HashRouter_options = {
	diccRutas: [],
	link_selector: "",
	view_selector: "",
};

// 2. El método inicial
function HashRouter(
	diccRutas,
	link_selector = ".hash-link",
	view_selector = ".hash-view"
) {
	__HashRouter_options.diccRutas = diccRutas;
	__HashRouter_options.link_selector = link_selector;
	__HashRouter_options.view_selector = view_selector;

	// Escribimos el hash
	document.querySelectorAll(link_selector).forEach(function (link) {
		link.addEventListener("click", function (e) {
			e.preventDefault();
			location.hash = "#" + e.target.getAttribute("href");
		});
	});

	// Leemos el hash
	window.addEventListener("hashchange", function (e) {
		const hashActual = e.newURL.split("#")[1];

		__HashRouter_Render(hashActual);

    __SimpsonLib_Guardia();
	});
}

// 3. El métoodo Render, que se invoca en el método inicial para renderizar el hash actual
function __HashRouter_Render(hash) {
	const encontrado = __HashRouter_options.diccRutas.find(function (valor) {
		return valor.path == hash;
	});

	if (!encontrado) return false;

	if(encontrado.renderUrl) {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', encontrado.renderUrl);
		xhr.responseType = "document";
		xhr.send();
		xhr.onload = function() {
			const body = xhr.response.body
			const css = body.querySelector('style');
			const js = body.querySelector('script');
			const html = body.querySelector('template').content;			

			document
			.querySelectorAll(__HashRouter_options.view_selector)
			.forEach(function (view) {
				view.innerHTML = '';
				view.appendChild(html);
			});

			document.body.appendChild(js);
			
		}
	} else {
		document
		.querySelectorAll(__HashRouter_options.view_selector)
		.forEach(function (view) {
			view.innerHTML = encontrado.render;
		});
	}


}

function __SimpsonLib_Guardia() {
  if(Number(localStorage.getItem('cantidad')) > 6 ) {
    alert('PUNCH! En Estados Unidos no hacemos bromas');
    localStorage.setItem('cantidad', 0);
  } else {
    const nuevo = Number(localStorage.getItem('cantidad')) + 1

    localStorage.setItem('cantidad', nuevo);
  }
}

