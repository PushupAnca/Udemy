
var cajas = document.getElementsByTagName('div');

console.log(cajas)

//----------crear nodos 

//----crear elemento 
var caja = document.createElement('div');

//-----crear nodo de texto 
var contenido = document.createTextNode('hola chicos');

//------añadir el nodo de texto al elemento 
caja.appendChild(contenido);

//----------agregar atributos a la caja 
caja.setAttribute('class', 'caja naranja');


//--------------agregar el elemento al documento 
var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja);






//------------------------------MODIFICANDO LA CLASE O ID DEL ELEMENTO 

//----modificar class y id
caja.id = 'primera';
// caja.className = 'caja';


//-------------extraer el elemento padre 
var padre = cajas[0].parentNode;

// padre.insertBefore(caja, cajas[0]);

padre.replaceChild(caja, cajas[2]);

//----------eliminamos elementos
padre.removeChild(cajas[3])


