/**
 * El Router es una pieza de código que determina
 * el contenido a renderizar por un SPA.
 *
 * Responde a la pregunta:
 *
 * ¿QUE TENGO QUE PONER AHORA EN LA PÁGINA?
 *
 *
 * Actualizar los router-view al hacer click en un
 * router-link en base a la url del router-link y
 * el diccionario de rutas pasado.
 *
 * Eventos importantes
 * Target: [.router-link]
 * Event: click
 * Callback: cargar la ruta correspondiente al .href del clickeado
 *
 */
function Router(rutas) {
	// 1. Elegimos todos los TARGET
	const links = document.querySelectorAll(".router-link");

	// 2. Para cada uno de ellos...
	links.forEach(function (lnk) {
		// 3. Asignamos el click. Al hacer click en un link...
		lnk.addEventListener("click", function (e) {
			e.preventDefault();

			// 4. Se busca el contenido asociado en el array de rutas
			const contenido = rutas.find(function (val) {
				/**
				 * La única salvedad es el .getAttrubute.
				 * getAttribute me permite obtener determinado
				 * atributo html, pero sin procesar.
				 */
				return val.path == lnk.getAttribute("href");
			});

			// 5. Finalmente, mostramos dicho contenido en cada router-view
			document.querySelectorAll(".router-view").forEach(function (vw) {
				vw.innerHTML = contenido.render;
			});

			// Recursion (Una función que se llama a sí misma)
			Router(rutas);
		});
	});
}

/**
 * IDEAS PARA MEJORAR UN ROUTER
 *
 * 1. ¿Cómo puedo pasar parámetros a una url del router? (RegEx)
 * 2. ¿Cómo puedo cargar el contenido de una página de forma asicnrónica, para asi no consumir recursos innecesarios? (Lazy loading)
 * 3. ¿Cómo puedo definir un "ciclo de vida" para la página y escuchar eventos?
 * 4. ¿Cómo puedo definir distintos tipos de enrutamiento?
 *  - Mediante la API History
 *  - Mediante el Hash (#)
 * 5. ¿Cómo minimizar los cambios al DOM?
 * 6. ¿Como resuelvo el problema del fallback?
 */
