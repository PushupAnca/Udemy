
$(document).ready(function(){
 
 	function mouseenter(){
 		var html = $('.html'),
 			css = $('.css'),
 			js = $('.js')

 	if (html = true) {
 		$('.cicloHtml').animate({"background-position":"0px"},100);
 		
 	}
 	}
    
});


  mouse_is_inside = true;
  var html = $('.html').width(),
 	  css = $('.css'),
 	  js = $('.js')

$(document).on({
    mouseenter: function (dentro) {

        if (mouse_is_inside = html) {
        	$('.cicloHtml').animate({"background-position":"0px"},100);
        }if(mouse_is_inside = css){
        	$('.Css').animate({"background-position":"0px"},100);
        }
        console.log('entro aki')
    },

    mouseleave: function (fuera) {
        if (mouse_is_inside = true) {
        	$('.cicloHtml').animate({"background-position":"-118px"},100);
        }if(mouse_is_inside = css){
        	$('.Css').animate({"background-position":"-118px"},100);
        }
        console.log('salgo de aki')
    }
});
fuera();
dentro();
