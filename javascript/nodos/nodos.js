
var cajas = document.getElementsByTagName('div');
var cajas = document.getElementsByClassName('caja');

var primeraCaja = document.getElementById('primeraCaja')

primeraCaja.textContent = 'Hola mundo';
// primeraCaja.innerHTML = '<u>Hola Mundo</u>';

// --------------> creando nodos

// primer paso  -->  crear el elmento (QUE SERIA NODO 'DIV' 'ETIQUETA')
 var caja = document.createElement('div');

 // segundo paso es crear el texto (QUE ES EL NODO DE TEXTO )
 var contenido = document.createTextNode('Hola Mundo');

 // tercer paso---> juntar los dos primeros NODE
 caja.appendChild(contenido);

// cuarto paso --> agregarles atributos a 'caja'
// caja.setAttribute('class', 'caja naranja');

// quinto paso --> implementar el node a un bloque 'div' que lo guardamos en una variable llamada contenedor como su ID 
var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja); // agrega el elemento al final

//--------------------------->  modificando la clase o el ID de un elemento 

caja.id = 'primera';
caja.className = 'caja naranja'; 


//------------> como obtener el elemento padre¿¿¡ 

var padre = cajas[0].parentNode; 
// var cajas = document.getElementsByTagName('div'); nos da el padre de todas estas cajas. lo vemos en consola 


// como posisionar elementos antes de otro seleccionado en base al padre.
// padre.insertBefore(caja, primeraCaja); //antes d ela caja 1

padre.insertBefore(caja, cajas[2]); //antes d ela caja 2


// reemplazar elementos  repalcechild()

//caja es el elemento que quieremos reemplazar y cajas[0] con la position 0 es la que reemplaza la 'caja'

padre.replaceChild(caja, cajas[1])  

//------------------> eliminando nodos 

padre.removeChild(cajas[3]);