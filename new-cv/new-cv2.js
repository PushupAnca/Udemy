$( document ).ready(function() {
  $('.ciclo').css({'background-position': '-100px'});
    $("article").mouseenter(function() {
        $(this).siblings(".ciclo").css({'background-position': '0px'});
        // console.log(this + 'hover')
    }); 
     $("article").mouseleave(function() {
         $(this).siblings(".ciclo").css({'background-position': '-100px'});
    }); 
});


var clases = ['html','css', 'java', 'boot', 'sublime', 'netb', 'dream', 'gitub', 'source','word', 'excel', 'power','outlook', 'espa','ingles', 'rumano'];
var varClases = clases.length
var cuatroRandom = [];                                        //  me guarda los ele en distinto orden
var posicionesElegibles = [];                                 //, se guarada la position de los elementos d ela array
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
console.log(cuatroRandom + ' cuatroRandom')

// var caja = document.createElement('div');
//  caja.setAttribute('class', 'ciclo');


  function crearCaja(){
    $( '.tecnico' )                                                 
  .attr( "id", function( arr) {                               
        return clases[arr] + arr; 
       console.log(clases[arr]);
       var contenedor = document.getElementById(clases);
      })

  .each(function(arr) {
     $( "arr", this ).html( "(id =" + arr);
      for( i = 0; i < 9 ; i++){
            caja = document.createElement('div');
            this.appendChild(caja)
            caja.setAttribute('class', 'ciclo');
            caja++;
            console.log('css') 
               console.log(i + 1+ '.- clases ' +clases);
      };                  
    console.log('return')
    console.log(arr + 'arr')
      
});
     
};
crearCaja();


