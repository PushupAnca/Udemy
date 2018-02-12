



var interupAribaAnd = $('#interupAribaAnd');
var interupAbajoAnd = $('#interupAbajoAnd');
var interuptorAribaOrr1 = $('#interuptorAribaOrr1');
var interuptorAribaOrr2 = $('#interuptorAribaOrr2');
var interuptorAbajoOrr1 = $('#interuptorAbajoOrr1')
var interupAbajoOrr2 = $('#interupAbajoOrr2')

var botonAndX1 = false;
var botonAndX2 = false;

function actualizBombillaAnd(){
   if (botonAndX1 && botonAndX2 ) {
   		$('.becul').css({'background': 'yellow'})
   }else{
   	    $('.becul').css({'background': '#fff'})
   }

}

function actualizBombillaOrr(){
   if (botonAndX1 && botonAndX2 ) {
   		$('.beculOrr').css({'background': 'yellow'})
   }else{
   	    $('.beculOrr').css({'background': '#fff'})
   }

}


$( "#onAnd" ).click(function(and){
	$(this).css({'background': '#fae73b'})
	$('#offAnd').css({'background': '#fff'})
	$(interupAribaAnd).removeClass('interuptorAriba').addClass('transform')
	botonAndX1 = true;
	actualizBombillaAnd();
});
$( "#offAnd" ).click(function(and){
	$(this).css({'background': '#fae73b'})
	$('#onAnd').css({'background': '#fff'})
    $(interupAribaAnd).removeClass('transform').addClass('interuptorAriba');
    botonAndX1 = false;
	actualizBombillaAnd();
});
//---------------------------------------------------------------------------------------primer interuptor And
$( "#onAnd1" ).click(function(and){
	$(this).css({'background': '#fae73b'})
	$('#offAnd2').css({'background': '#fff'})
	$(interupAbajoAnd).removeClass('interuptorAbajoAnd').addClass('transform2');
	botonAndX2 = true;
	actualizBombillaAnd();
});

$( "#offAnd2" ).click(function(and){
	$(this).css({'background': '#fae73b'})
	$('#onAnd1').css({'background': '#fff'})
	$(interupAbajoAnd).removeClass('transform2').addClass('interuptorAbajoAnd')
  	botonAndX2 = false;
	actualizBombillaAnd();
});



//---------------------------------------------------------------------------------------primer interuptor Orr

$( "#onOrr1" ).click(function(and){
	$(this).css({'background': '#fae73b'})
	$('#offOrr2').css({'background': '#fff'})
	$(interuptorAribaOrr2).removeClass('interuptorAribaOrr2').addClass('transformOrr');
	botonAndX1 = true;
	actualizBombillaOrr();
});

$( "#offOrr1" ).click(function(and){
	$(this).css({'background': '#fae73b'})
	$('#onOrr1').css({'background': '#fff'})
    $(interuptorAbajoOrr2).removeClass('interuptorAbajoOrr2 ').addClass('transform');
    botonAndX1 = false;
	actualizBombillaOrr();

});

// $( "#onOrr2" ).click(function(and){
// 	$(this).css({'background': '#fae73b'})
// 	$('#offOrr2').css({'background': '#fff'})
// 	$(interuptorAbajoOrr2).removeClass('interuptorAriba').addClass('transform2');
// 	botonAndX1 = true;
// 	actualizBombillaOrr();
// });

// $( "#offOrr2" ).click(function(and){
// 	$(this).css({'background': '#fae73b'})
// 	$('#onOrr1').css({'background': '#fff'})
//     $(interuptorAbajoOrr2).removeClass('interuptorAbajoOrr2 ').addClass('transform');
//     botonAndX1 = false;
// 	actualizBombillaOrr();

// });






var x1 = false;
// var y = false;


 var y =  ! x1;
	console.log('y = '  +y)

