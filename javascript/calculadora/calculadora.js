
function suma(){
  var num1 = parseFloat(document.getElementById('numero1').value);
  var num2 = parseFloat(document.getElementById('numero2').value);
  var result = num1 + num2;

  document.getElementById('resultado').value = result; 
}
