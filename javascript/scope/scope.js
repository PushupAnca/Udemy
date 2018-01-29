

// function anidada es (una funcion dentro de otra funccion)
// function saludo(){
// 	var texto = "Hola Mundo"
// 	console.log(texto)
// }

// saludo();
// console.log(texto)


// ----------------------------------------Variable local con function anidada 
// El scope functiona por niveles.
// La regla es que podemos buscar variables desde dentro hacia fuera. 
// Ej: si en la function 'mensaje' no encuentra la var texto lo busca fuera de ella.

// Desde la function 'saludo' no puede buscar var hacia dentro: en la function mensaje

// function saludo(){
// 	var texto = 'hola Mundo';

// 	function mensaje(){
// 		document.write(texto);
// 		console.log(texto)
// 	}
// 	mensaje();
// }
// saludo();


//------------------------------------- Variable globales y locales 

// var glob = 'hola global';

// function saludo(){
// 	console.log(glob)

// 	var local = 'hola local';
//   console.log(local);

// }
// saludo();

//------------------------------IMPORTANTE !! si una variable no se la pone el 'var=' auque esta dentro de una function de convierte en global 

// function saludo(){
// 	mensaje = 'hola mensaje'
//   console.log(mensaje);
// }
// saludo();


//--------------------------- Como proteger nuestro codigo de terceros
//---------------function autoinvocadas 

// (function(){
// 	alert('holaaaa')
// 	// -----------todo el codigo va dentro 
// }())