

var cartas = [2,3,4,5,6,7,8,9,10,11];
var cartasLength = [] ;
var cartasJugador = [];
var cartasBanco = [];
var jugador = true;
var i, cartasAleatorias;
var deshabilitarJ = false;

	for (i = 0; i < 20; i++) {
    var cartasAleatorias = Math.floor(Math.random() * 10+2);
    if (jugador == true) {
    	console.log('es turno del jugador ' + cartasAleatorias)
    }else{
    	console.log('es turno del banco ' + cartasAleatorias)
    }
	console.log(cartasAleatorias + ' cartAle')

	    if (jugador == true ) {
	    	if (deshabilitarJ == false){ 
				var respuesta = prompt("quieres cartas");
				if 	(respuesta != null){ 
					if(respuesta == 'si'){   
					cartasJugador.push(cartasAleatorias);
					// console.log(cartasJugador + ' cartasJugador')
				    }else if(respuesta == 'no'){
				    	deshabilitarJ = true;
				    	console.log('ha dicho no')
				    }
			    }
			}
				respuesta = null;
				jugador = false;
		}else{
				banco = true;
				// console.log('banco true' +i);
				cartasBanco.push(cartasAleatorias);
				// console.log(cartasBanco + ' cartasBanco')
				jugador = true;
		}
		if (sumaJugador() > 21 || sumaBanco() > 21 ){
			console.log(' mas grande ' + sumaJugador() > 21 || sumaBanco() > 21); 
			console.log(' mas grande ' + deshabilitarJ == true && sumaBanco >= 17 && sumBanco >= sumaJugador); 

			i = 20;
		}else if (deshabilitarJ == true && sumaBanco >= 17 && sumBanco >= sumaJugador) {
			console.log(' else if');
		}
    }
    var finalizar = deshabilitarJ == true && sumaBanco >= 17 && sumBanco >= sumaJugador;
      console.log(sumaJugador() + ' sumaJugador '+ sumaBanco() + ' sumaBanco ' )









	function sumaJugador(){
		var sumJugador = 0; 
		for(i = 0; i < cartasJugador.length; i++){
		sumJugador = sumJugador + cartasJugador[i];
		}
		// console.log(cartasJugador + ' cartasJugador[i]')
		// console.log(sumJugador + ' cartasJugador[i]  con sum[i]')
		return sumJugador;
	}
	function sumaBanco(){
		var sumBanco = 0; 
		for(i = 0; i < cartasBanco.length; i++){
		sumBanco[i] = cartasBanco[i]+cartasBanco[i];
		sumBanco = sumBanco + cartasBanco[i]
		}
		// console.log(cartasBanco + ' sumBanco[i]')
		//console.log(sumBanco + ' sumBanco[i]  con sum[i]')
		return sumBanco;
	}


	

