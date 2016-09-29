window.onload = function () {

	var contenedor = document.getElementById("contenedor"),
		btnNuevaTarea = document.getElementById("btnNuevaTarea"),
		tarea = document.getElementById("tarea");
	btnNuevaTarea.disabled = true;

	function validar() {
		var longitud = tarea.value.length,
			texto = tarea.value;

		if (longitud === 0 || texto === "" || texto.trim().length === 0) {
			btnNuevaTarea.disabled = true;
			return false;
		} else {
			btnNuevaTarea.disabled = false;
		}
	}
	tarea.addEventListener("keydown", function () {
		validar();
	});

	function agregarTarea() {
		var tareas = tarea.value,
			contenedor = document.getElementById("contenedor"),
			nuevaTarea = document.createElement("div"),
			parrafo = document.createElement("p"),
			checkbox = document.createElement("input"),
			texto = document.createTextNode(tareas),
			icono = document.createElement("span");

		nuevaTarea.classList.add("lista");
		nuevaTarea.classList.add("checkbox");
		contenedor.appendChild(nuevaTarea);
		checkbox.type = "checkbox";
		parrafo.appendChild(checkbox);
		nuevaTarea.appendChild(parrafo);
		parrafo.appendChild(texto);
		parrafo.classList.add("contenedorLista");
		icono.classList.add("fa", "fa-trash-o", "icono");
		nuevaTarea.appendChild(icono);

		function linea() {
			parrafo.classList.toggle("linea");
		}

		checkbox.addEventListener("click", function () {
			linea();
		});

		function borrarTarea() {
			contenedor.removeChild(nuevaTarea);
		}
		icono.addEventListener("click", function () {
			borrarTarea();
		});
	}

	/* Eventos */
	btnNuevaTarea.addEventListener("click", function () {
		agregarTarea();
		btnNuevaTarea.disabled = true;
		tarea.value = "";
	});
};
