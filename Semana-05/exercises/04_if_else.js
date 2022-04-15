// 3 Arrays

var array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];

/* 3-a Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/
console.log ('Exercise 3-a')
console.log (array[5],array[11]);


// 3-b Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log ('Exercise 3-b');
console.log (array.sort());

// 3-c Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log ('Exercise 3-c');

var finalArray = array.push('final');
var beginArray = array.unshift('begin');

console.log (array);

// 3-d Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log ('Exercise 3-d');

var byeBegin = array.shift();
var byeFinal = array.pop();

console.log (array);

// 3-e  Invertir el orden del array (utilizar reverse).
console.log ('Exercise 3-e');

var reverseArray = array.reverse();

console.log (reverseArray);

//3-f Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log ('Exercise 3-f');

var stringArray = array.join('-');

console.log (stringArray);
//3-g  Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice)
console.log ('Exercise 3-g');

array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];

var minArray = array.slice(4,11);

console.log (minArray);
