
/* Existen tres modelos de eventos diferentes 
		- Modelo basico de eventos. 
				1. seria el html, los eventos que se escriben en html como onclik=(). los lee todos los nav. 
			Características limitadas.
			Pero functiona en todos los navegadores.

		- Modelos de eventos estandar.
				1. Son los elementos que tienes un Id para atacarlo directamente en javascript
			Podemos hacer cosas con el.
			Todos los navegadores lo soportan 

			Las versiones anteriores de Internet explorer como IE7 no lo soportan 

		-Modelo de eventos de Internet Explorer.
			Modelo creado por Microsoft exclusivamente para IE 

*/
var btnSaludar = document.getElementById('btn-saludar');
btnSaludar.addEventListener('click', function(){
	//--codigo de la function "function anonima" --> se llaman FalBax 
	alert('hola function');
	console.log('hola con function')
}) 

function crearCaja(){
	var contenedor = document.getElementById('contenedor');
	var caja = document.createElement('div');
	caja.className = 'caja';
	contenedor.appendChild(caja);
}

var btnCaja = document.getElementById('btn-caja');
btnCaja.addEventListener('click', crearCaja);



		function saludo(){
			alert('Hola 1');
		}

		function saludo2(){
			alert('Hola 2');
		}

		var btnSaludar = document.getElementById('btn-saludar');
		btnSaludar.addEventListener('mouseenter', saludo2);
		btnSaludar.addEventListener('mouseleave', saludo);

		// btnSaludar.removeEventListener('click', saludo);
		// console.log('hola 3')
		/* Algunos de los eventos mas usados:			
			click
			focus
			blur
			change
			onload
			mouseover
			mouseout
			resize 
			submit
		*/


function crearCaja(){
	var contenedor = document.getElementById('contenedor');//-------------- creamos la var contenedor con el id contenedor 
	var caja = document.createElement('div');//----------------- creamos el var 'caja' para decirle que tipo de etiqueta quieremos que sea, 
											//en este caso es un 'div'.
	caja.className  = 'caja'; // ----------------------- a la caja que quieremos que sea div le añadimos una clase 'caja'.
	contenedor.appendChild(caja); // ------------------------- en el contenedor añadimos el caja que seria un div con la clase caja 

}

var btnCaja = document.getElementById('btn-caja'); // creamos la variable  'btnCaja' para localizar el boton 'btn-caja'.
btnCaja.addEventListener('click', crearCaja); // al btnCaja que es el boton le añadimos un evento con 'addEventListener' click y llamamos 
                                               //la function 'crearCaja'

 

	$("#divMouseover").mouseenter(function(){
       $(".div2").css("background-color", "yellow");
       console.log('mouseenter')
});

