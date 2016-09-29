window.onload = function(){
	var contenedor = document.getElementById("contenedor");
	var btnNuevaTarea = document.getElementById("btnNuevaTarea");
	var tarea = document.getElementById("tarea");
	btnNuevaTarea.disabled = true;

	tarea.addEventListener("keydown",function(){
		validar();
	});
	function validar(){
		var longitud = tarea.value.length;
		var texto = tarea.value;

		if(longitud == 0 || texto === "" || texto.trim().length === 0){
			btnNuevaTarea.disabled=true;
			return false;
		}
		else{
			btnNuevaTarea.disabled=false;
		}
	}

function agregarTarea() {
		var tareas = tarea.value;
		var contenedor = document.getElementById("contenedor");
		var nuevaTarea= document.createElement("div");
		nuevaTarea.classList.add("lista");
		nuevaTarea.classList.add("checkbox");
		contenedor.appendChild(nuevaTarea);
		var parrafo = document.createElement("p");
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		parrafo.appendChild(checkbox);
		nuevaTarea.appendChild(parrafo);
		var texto = document.createTextNode(tareas);
		parrafo.appendChild(texto);
		parrafo.classList.add("contenedorLista");

		var icono = document.createElement("span");
		icono.classList.add("fa","fa-trash-o","icono");
		nuevaTarea.appendChild(icono);

		checkbox.addEventListener("click", function() {
			linea();
		});
		function linea(){
			parrafo.classList.toggle("linea");
		}
		icono.addEventListener("click", function() {
			borrarTarea();
		});
		function borrarTarea(){
			contenedor.removeChild(nuevaTarea);
		}
	}

	/* Eventos */
	btnNuevaTarea.addEventListener("click", function() {
		agregarTarea();
		btnNuevaTarea.disabled=true;
		tarea.value="";
	});



};
