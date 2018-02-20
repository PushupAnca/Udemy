
var cartasJugador = [];
var cartasBanco = [];
var jugador = true;
var i, cartasAleatorias;
var deshabilitarJ = false;

for (i = 0; i < 20; i++) {
	var cartasAleatorias = Math.floor(Math.random() * 10+2);
	if (jugador == true) {
		console.log('es turno del jugador ' + cartasAleatorias)
	} else {
		console.log('es turno del banco ' + cartasAleatorias)
	}

	if (jugador == true) {

		if (deshabilitarJ == false) {
			var respuesta = prompt("quieres cartas");
			if (respuesta != null) {
				if (respuesta == 'si') {

					if (cartasAleatorias == 11 && sumaJugador()  >= 10) {
						cartasAleatorias = 1;
						console.log(cartasAleatorias + ' con 11')
					}
					cartasJugador.push(cartasAleatorias);
				} else if (respuesta == 'no') {
					deshabilitarJ = true;
					console.log('ha dicho no')
				}
			}
		}
		respuesta = null;
		jugador = false;
	} else {
		banco = true;
		if (cartasAleatorias == 11 && sumaBanco()  >=  10) {
			cartasAleatorias = 1;
			console.log(cartasAleatorias + ' con 11')
		}
		cartasBanco.push(cartasAleatorias);
		jugador = true;
	}
	if ((sumaJugador() > 21 || sumaBanco() > 21) || (deshabilitarJ == true && sumaBanco() >= 17 && sumaBanco() >= sumaJugador())) {
		console.log(' mas grande -' + sumaJugador() > 21 || sumaBanco() > 21);

		i = 20;
	}
}
	if (sumaJugador() < sumaBanco() && sumaJugador() < 21 && sumaBanco() > 21) {
		console.log(sumaJugador() + ' ganador Jugador');
	}else if (sumaBanco() < sumaJugador() && sumaBanco() < 21 && sumaJugador() > 21 || sumaJugador() < 21){
			console.log(sumaBanco() + ' ganador Banco');
	}


var finalizar = deshabilitarJ === true && sumaBanco >= 17 && sumBanco >= sumaJugador;
console.log(sumaJugador() + ' sumaJugador ' + sumaBanco() + ' sumaBanco ')


function sumaJugador() {
	var sumJugador = 0;
	for (i = 0; i < cartasJugador.length; i++) {
		sumJugador = sumJugador + cartasJugador[i];
	}
	return sumJugador;
}

function sumaBanco() {
	var sumBanco = 0;
	for (i = 0; i < cartasBanco.length; i++) {
		sumBanco[i] = cartasBanco[i] + cartasBanco[i];
		sumBanco = sumBanco + cartasBanco[i]
	}
	return sumBanco;
}