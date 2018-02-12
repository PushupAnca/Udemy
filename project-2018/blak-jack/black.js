

var cartas = [2,3,4,5,6,7,8,9,10,11];
var cartasLength = [] ;
var cartasJugador = [];
var cartasBanco = [];
var jugador = true;
var posicionesElegibles = [];                                 //, se guarada la position de los elementos d ela array
var i, cartasAleatorias;



for (i = 0; i < 10; i++) {
  cartasAleatorias = Math.floor(Math.random() * cartas.length);      
  cartasLength.push(cartas[cartas.length[cartasAleatorias]]);           
  // alert("Número aleatorio entre 0 y 10:  "+ cartasAleatorias);
}

// repartiendo cartas de uno en uno empezando con el jugador
function sacarCartas(){
	for (i = 0; i < 10; i++) {
	cartasAleatorias = Math.floor(Math.random() * cartas.length);   
	// cartasLength.push(cartas[cartas.length[cartasAleatorias [i]]]); 
	cartasLength.push(cartas[cartasAleatorias]);            
	console.log(cartasAleatorias + ' cartasAleatorias')
	  if (jugador == true ) {
				console.log('jugador true' + i)	
				cartasJugador.push(cartasAleatorias);
				console.log(cartasJugador + ' cartasJugador')

				jugador = false;
		}else{
				banco = true;
				console.log('banco true' +i);
				cartasBanco.push(cartasAleatorias);
				console.log(cartasBanco + ' cartasBanco')

				jugador = true;

			}
    }
}
sacarCartas();



var r = []; // en esta array me guarda la suma por posision de la array cartasJugador... 
var sumJugador = 0; 
for(i = 0; i < cartasJugador.length; i++){
  sumJugador = sumJugador + cartasJugador[i]
}
console.log(sumJugador + ' suma');
console.log(cartasJugador + ' cartasJugador[i]')
console.log(sumJugador + ' cartasJugador[i]  con sum[i]')

var sumBanco = 0; 
for(i = 0; i < cartasBanco.length; i++){
  r[i] = cartasBanco[i]+cartasBanco[i];
  // suma = r;
  sumBanco = sumBanco + cartasBanco[i]
}
console.log(sumBanco + ' sumBanco');
console.log(cartasBanco + ' sumBanco[i]')
console.log(sumBanco + ' sumBanco[i]  con sum[i]')