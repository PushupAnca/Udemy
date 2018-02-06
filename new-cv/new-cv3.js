
var clases = ['html','css', 'java', 'boot'];
var varClases = clases.length
var cuatroRandom = [];                                        //  me guarda los ele en distinto orden
var posicionesElegibles = [];                                 // se guarada la position de los elementos de la array
var i, r;
console.log(varClases)

var idAleatorio = Math.floor(Math.random() * cuatroRandom.length);

for (var i = 0; i < idAleatorio.length; i++) {
  idAleatorio[i]
  console.log(idAleatorio + ' idAleatorio');
}

for (i = 0; i < clases.length; i++){
	posicionesElegibles[i] = i;                                  // extraer la  position de los elementos d ela array 
	console.log(posicionesElegibles + ' posicionesElegibles')
}		

for (i = 0; i < 4; i++) {
  r = Math.floor(Math.random() * posicionesElegibles.length);     //  elige posicion, empieza en 0 hasta 4 por que el for es hasta el 4 
  cuatroRandom.push(clases[posicionesElegibles[r]]);              // array vacia donde con push() implemenetamos los clases.[posicionesElegibles [r]]
  posicionesElegibles.splice(r, 1);
  console.log(r + ' r')
}

console.log(cuatroRandom.toString() + ' toString ');
console.log(cuatroRandom + ' cuatroRandom')



// ----------------------------------------------------------------------------------------------ID a los div
// var id = $(this).attr('id');
$( '.tecnico' )                                                      // añade id-id numeros a todos los div que tienen la clase 'tecnico' del body
  .attr( "id", function( arr ) {                                // .atrr si le pones class te añadira una clase y si le pones 'id' te añade un id 	
  			return idAleatorio + arr;                    // el arr es el numero que se le implementa al id 
    // return "tecnico-id" + arr;
    console.log(id)
  		})
  
  .each(function() {
    // $( "span", this ).html( "(id = '<b>" + this.id + "</b>')" );
     $( "arr", this ).html( "(id =" + arr);
    console.log('return')
    console.log(arr + 'arr')
});
//----------------------------------------------------------------------- id a los div 
