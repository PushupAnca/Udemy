
var formulario = document.getElementById('formulario');
	nombre = formulario.nombre,
	correo = formulario.correo,
	sexo = formulario.sexo,
	terminos = formulario.terminos,
	error = document.getElementById('error');

	// muy importante cada vez que se pulsa el boton 'registro' el form se envia y la pagina se actualiza, 
//por ello en el console.log() no aparece nada
// La solucion es : parametro d ela funcion en este caso (e).preventDefault(); Esto evita que el form se envie. 
 // el += significa que muestra lo que ya tiene en el html mas el <li> que añadimos


function validarNombre(e){    
 	if (nombre.value == '' || nombre.value == null) {
		console.log(' rellena el nombre');
		error.style.display = 'block';
		error.innerHTML += '<li>Por favor completa el nombre</li>';

		e.preventDefault();
	}else{
		error.style.display = 'none';
	}
}
function validarCorreo(e){
	if (correo.value == '' || correo.value == null) {
		console.log(' rellena el correo');
		error.style.display = 'block';
		error.innerHTML += '<li>Por favor completa el correo</li>';

		e.preventDefault();
	}else{
		// error.style.display = 'none';
	}
}

function validarSexo(e){
	if (sexo.value == '' || sexo.value == null) {
		console.log(' rellena el mujer o hombre');
		error.style.display = 'block';
		error.innerHTML += '<li>Por favor completa el mujer o hombre</li>';

		e.preventDefault();
	}else{
		// error.style.display = 'none';
	}
}
function validarTerminos(e){
	if (terminos.checked == false) {
		console.log(' rellena el terminos');
		error.style.display = 'block';
		error.innerHTML += '<li>Por favor completa y acepta los terminos</li>';

		e.preventDefault();
	}else{
		// error.style.display = 'none';
	}
}
function validarForm(e){
	error.innerHTML = '';
	validarNombre(e);
	validarCorreo(e);
	validarSexo(e);
	validarTerminos(e);

}


formulario.addEventListener('submit', validarForm);