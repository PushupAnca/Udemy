
function crearCaja(){
	var contenedor = document.getElementById('contenedor'); // creamos la var contenedor con el id contenedor 
	var caja = document.createElement('div');               // creamos el var 'caja' para decirle que tipo de etiqueta quieremos que sea, en este caso es un 'div'.
	caja.className  = 'caja';                                 // a la caja que quieremos que sea div le añadimos una clase 'caja'.
	contenedor.appendChild(caja);                           // en el contenedor añadimos el caja que seria un div con la clase caja 

}

var btnCaja = document.getElementById('btn-caja'); // creamos la variable  'btnCaja' para localizar el boton 'btn-caja'.
btnCaja.addEventListener('click', crearCaja); // al btnCaja que es el boton le añadimos un evento con 'addEventListener' click y llamamos la function 'crearCaja'




