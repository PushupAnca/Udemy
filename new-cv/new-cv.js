


var clases = ['html', 'css', 'java', 'boot'];

var verdadero = clases > 4; 
$(function(){
    $('.tecnico').each(function crearCaja(){
      var contenedorHtml = document.getElementById('html');
      var contenedorCss = document.getElementById('css');
      var contenedorJava = document.getElementById('java');
      var contenedorBoot = document.getElementById('boot');
      var caja = document.createElement('div');
       caja.setAttribute('class', 'ciclo');
       // var html = contenedorHtml.appendChild(caja); 
       
       for(var i = 0; i < 9 ; i++){
                caja = document.createElement('div');
                contenedorHtml.appendChild(caja);
                caja.setAttribute('class', 'ciclo');
                caja++;
                console.log('css') 
                   console.log(i + 1+ '.- clases ' +clases);
          };
       for(var i = 0; i < 9 ; i++){
                caja = document.createElement('div');
                caja.setAttribute('class', 'ciclo');
                contenedorCss.appendChild(caja); 
                caja++;
                console.log('css') 
                   console.log(i + 1+ '.- clases ' +clases);
          };
        for(var i = 0; i < 9 ; i++){
                caja = document.createElement('div');
                caja.setAttribute('class', 'ciclo');
                contenedorJava.appendChild(caja); 
                caja++;
                console.log('java') 
                   console.log(i + 1+ '.- clases ' +clases);
          };
        for(var i = 0; i < 9 ; i++){
                caja = document.createElement('div');
                caja.setAttribute('class', 'ciclo');
                contenedorBoot.appendChild(caja); 
                caja++;
                console.log('boot') 
                   console.log(i + 1+ '.- clases ' +clases);
          };
          contenedorHtml.appendChild(caja);
          console.log(contenedorHtml);
          contenedorJava.appendChild(caja); 
          console.log(contenedorJava);
          contenedorCss.appendChild(caja);
          console.log(contenedorCss);
          contenedorBoot.appendChild(caja);
          console.log(contenedorBoot);
    
         
  });
});

$(document).ready(function(){
  $('.ciclo').css({'background-position': '-100px'});
    $("article").mouseenter(function() {
        $(this).siblings(".ciclo").css({'background-position': '0px'});
        console.log(this + 'hover')
    }); 
     $("article").mouseleave(function() {
         $(this).siblings(".ciclo").css({'background-position': '-100px'});
        console.log(this + 'hover')
    }); 

});


