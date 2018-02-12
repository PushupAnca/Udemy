
//ENCENDER NADA MAS CARGAR LA PAGINA--->
// function encender() {
//      $('.onBombilla').removeClass("onBombilla").addClass("offBombilla");

//     console.log("onBombilla")
    
// }setTimeout(function(){
//   encender("ana");
// }, 2000);



//APAGAR ----> DEL BOTTON
// function apagar() {
//      $('.offBombilla').removeClass("offBombilla").addClass("onBombilla");
//     console.log("offBombilla")
    
// }


// ENCENDER DEL BOTON Y APAGAR CON EL SETTIMEOUT




// function encender() {
// 	setTimeout(function(){
// 	 $('.onBombilla').removeClass("onBombilla").addClass("offBombilla");

//     },100)
//     console.log("offBombilla")


// 	setTimeout(function(){
		
// 	  $('.offBombilla').removeClass("offBombilla").addClass("onBombilla");

// 	     console.log("ana_2")
// 	},200)
 
// };

// var myVar = setInterval(function(){ setColor() }, 300);

// function setColor() {
//     var x = document.body;
//     x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
// }

// function stopColor() {
//     clearInterval(myVar);
// } 


// $(document).ready(function() {
//         function moveClass(){
//             var x = $('#billa');
//             x.removeClass('onBombilla');
//             x.addClass('offBombilla');
//             x.removeClass('onBombilla');
//             x.addClass('offBombilla');
//        }

//         setInterval(moveClass, 1000); 
//         return false;
//     }); 

function encender() {
	noche = setInterval(function(){
		var claseActiva = $('#billa').hasClass("offBombilla");
		if ( $('#billa').hasClass("offBombilla") == true ){
			$('#billa').removeClass().addClass("onBombilla");
		} else {
			$('#billa').removeClass().addClass("offBombilla");
		}

	},100)
}

function apagar() {
	clearInterval(noche);
	console.log("ana")
}