
var formulario = document.getElementById('formulario'); // ------------ con Jquery var formulario = $('formulario') 
// el formulario.addEventListener('submit', validarForm); da error en console. dice que no es una function. 
	nombre = formulario.nombre,
	correo = formulario.correo,
	sexo = formulario.sexo,
	terminos = formulario.terminos,
	error = document.getElementById('error');


	function validarForm(obj){
		error.innerHTML = '';
		if (nombre.value == '' || nombre.value == null) {
			console.log(' nombre')
			error.style.display = 'block';
			error.innerHTML = error.innerHTML + '<li>completa el nombre</li>'
			obj.preventDefault();
		}else{
			error.style.display = 'none';
			obj.preventDefault();
		}if (correo.value == '' || correo.value == null) {
			console.log('complete el correo');
			error.style.display = 'block';
			error.innerHTML = error.innerHTML + '<li>completa el correo</li>'
			obj.preventDefault();
		}else{
			// error.style.display = 'none';
			obj.preventDefault();
		}if (sexo.value == '' || sexo.value == null) {
			console.log('complete el sexo');
			error.style.display = 'block';
			error.innerHTML = error.innerHTML + '<li>completa el sexo</li>'
			obj.preventDefault();
		}else{
			obj.preventDefault();
		}if (terminos.checked == false) {
			console.log('complete el terminos');
			error.style.display = 'block';
			error.innerHTML = error.innerHTML + '<li>completa el terminos</li>'
			obj.preventDefault();
		}else{
			// obj.preventDefault();
		}
	}
	function validarFormulario(obj){
		validarForm(obj);
	};


	formulario.addEventListener('submit', validarFormulario);