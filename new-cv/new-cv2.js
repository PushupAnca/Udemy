
var clases = ['html','css', 'java', 'boot'];
var varClases = clases.length
var cuatroRandom = [];                                        //  me guarda los ele en distinto orden
var posicionesElegibles = [];                                 // se guarada la position de los elementos d ela array
var i, r;
console.log(varClases)


for (i = 0; i < clases.length; i++){
	posicionesElegibles[i] = i;                                  // extraer la  position de los elementos d ela array 
	console.log(posicionesElegibles + ' posicionesElegibles')
}		

for (i = 0; i < 4; i++) {
  r = Math.floor(Math.random() * posicionesElegibles.length);     //  elige posicion, empieza en 0 hasta 4 por que el for es hasta el 4 
  cuatroRandom.push(clases[posicionesElegibles[r]]);              // array vacia donde con push() implemenetamos los clases.[posicionesElegibles [r]]
  posicionesElegibles.splice(r, 1);
}
console.log(cuatroRandom.toString() + ' toString ');
console.log(cuatroRandom + ' cuatroRandom')

// ----------------------------------------------------------------------------------------------ID a los div
// var id = $(this).attr('id');
$( 'div' )                                                      // añade id-id numeros a todos los div que tienen la clase 'tecnico' del body
  .attr( "id", function( arr ) {                                // .atrr si le pones class te añadira una clase y si le pones 'id' te añade un id 	
  			return cuatroRandom +"-id" + arr;                    // el arr es el numero que se le implementa al id 
    // return "tecnico-id" + arr;
    console.log(id)
  		})
  
  .each(function() {
    // $( "span", this ).html( "(id = '<b>" + this.id + "</b>')" );
     $( "br", this ).html( "(id =" + cuatroRandom );
    console.log('return')
    console.log(arr + 'arr')
});
//----------------------------------------------------------------------- id a los div 

