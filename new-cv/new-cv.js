$( document ).ready(function() {
  $('.ciclo').css({'background-position': '-100px'});
    $("article").mouseenter(function() {
        $(this).siblings(".ciclo").css({'background-position': '0px'});
        $(this).siblings(".ciclo").siblings().last().css({'background-position': '-100px'});

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

for (i = 0; i < clases.length; i++){
  posicionesElegibles[i] = i;                                  // extraer la  position de los elementos d ela array 
  // console.log(posicionesElegibles + ' posicionesElegibles')
}   

for (i = 0; i < 4; i++) {
  r = Math.floor(Math.random() * posicionesElegibles.length);     //  elige posicion, empieza en 0 hasta 4 por que el for es hasta el 4 
  cuatroRandom.push(clases[posicionesElegibles[r]]);              // array vacia donde con push() implemenetamos los clases.[posicionesElegibles [r]]
  posicionesElegibles.splice(r, 1);
  console.log(r + ' r')
}
// console.log(cuatroRandom + ' cuatroRandom')


  function crearCaja(){
    $( '.tecnico' )                                                 
  .attr( "id", function( arr) {                               
        return  clases[arr] +'-id'+ arr; 
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
            // console.log('css') 
            //    console.log(i + 1+ '.- clases ' +clases);
      };                  
    // console.log('return')
    // console.log(arr + 'arr')
      
});
     
};
crearCaja();


//----------------------------------------------------------------------


var id = $(this).attr('id'); 

function crearId(){
    $( '.ciclo' )                                                 
  .attr( 'id' , function( dar) {                               
        return  'ciclo' +'-id'+ dar; 
       console.log(dar);
      })
  .each(function(dar) {
     $( dar , this ).html( "(id =" + dar);
      for( var i = 0; i < 9 ; i++){
        if (dar > 9) {
          i--;
        }
           $(this).attr('id', 'ciclo-'+i)
            console.log('dar') 
            i++;
               // console.log(i + 1+ '.- clases ' +clases);
      };                  
      
});
     
};
crearId();


// var clases = {'html':'7', 'css': '4'} ;

// $.each(clases, function( k, v ){

// var cont = 0;

//       for( i = 0; i < v ; i++){
//           var hijos = $('.'+k).children(".ciclo");
//           $.each(hijos, function(){
//             $(this).css({'background': 'red'});
//             cont++;
//             console.log('hola' + i + '. esto es ' + k);
//             if(cont == v ){
//               console.log('entraaa');
//                 return false;
//             }
//           });
// //console.log('hola' + i + '. esto es ' + k);

//       }; 

// });