
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
// var btnSaludar = document.getElementById('btn-saludar');
// btnSaludar.addEventListener('click', function(){
// 	//--codigo d ela function "function anonima" --> se llaman FalBax 
// })

function crearCaja(){
	var contenedor = document.getElementById('contenedor');
	var caja = document.createElement('div');
	caja.className = 'caja';
	contenedor.appendChild(caja);
}

var btnCaja = document.getElementById('btn-caja');
btnCaja.addEventListener('click', crearCaja)