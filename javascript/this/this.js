
var cajas = document.getElementsByClassName('caja');

// function color(){
// 	cajas[0].classList.toggle('negro');
// 	// cajas[1].classList.toggle('negro');
// 	// cajas[2].classList.toggle('negro');
// }
// cajas[0].addEventListener('click', color);


function color(){
	this.classList.toggle('negro'); // esta 'this' caja la que esta cliqueada se le quita una clase, indepenedientemente de la que tiene, una se quita y otra se le añade. 
}

for (var i = 0; i < cajas.length; i++) {
	cajas[i].addEventListener('click', color);
}


