$(document).ready(function(){

// first() - Regresa el primer elemento de varios seleccionados
	// $('.caja').first().css({background: '#f9a03f'});

// last() - Regresa el ultimo de varios seleccionados
	// $('.caja').last().css({background: '#f9a03f'});


// eq() - Regresa un elemento en base a un index. (position)
	// $('.caja').eq(2).css({background: '#f9a03f'});
	//selecciona la caja 3 por que funcciona como un array, empiza desde el 0 

// filter() - Nos permite filtrar entre los elementos mediante un criterio.
/* Ejemplo:
		Selecciona todas las cajas, despues de esa seleccion solo selecciona la #segunda.
*/

	// $('.caja').filter('#segunda').css({background: '#f9a03f'});

// not() - Nos regresa los elementos que no concuerdan con el criterio.
	$('.caja').not('#segunda').css({background: '#f9a03f'});

	

	
});