
function laOperacion(signo){
	var valor = $("#resultado").val();
	$("#resultado").val("");
	$("#resultado_2").val(valor);
	$("#operacion").html(signo);
	$("#resultado").val(""); 
}

function boton(numero){

	var botonActualizar = $("#finalizar").html();

	if (botonActualizar == "activado") {
		
		$('#resultado').val("");
	    var numero = numero;
	    var screen = $("#resultado").val();
	    var num_final = screen+""+numero;
	     $("#resultado").val(num_final);
	     $("#finalizar").html("");
    
    }else{
	   
	   var numero = numero;
	   var screen = $("#resultado").val();
	   var num_final = screen+""+numero;
	   $("#resultado").val(num_final);
	 
	 } 


}
 


 function realizarOperacion(){
 var valor1 = parseFloat($("#resultado").val());
 var valor2 = parseFloat($("#resultado_2").val());
 var operacion = $("#operacion").html(); 



  if (operacion == "+") {
  	var operacion_finalizada = valor1 + valor2;
  }else if (operacion == "-") {
  	   operacion_finalizada = valor2 - valor1;
  }else if (operacion == "*" ){
  	   operacion_finalizada = valor2 * valor1;
  }else if (operacion == "/") {
  	   operacion_finalizada = valor2 / valor1;
  }
     $("#resultado").val(operacion_finalizada);
      $("#resultado_2").val("");  ;
      $("#operacion").html("");
      $("#finalizar").html("activado");

 }





