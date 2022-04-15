//1) Variables y Operadores
console.log ('Variables y Operadores')

/*1-a Crear dos variables numéricas y utilizar el operador suma para guardar el 
valor de la suma de ambos números en una 3er variable.*/
console.log ('Exercise 1-a')

var x= 5;
var y= 6;
var suma = x + y;

console.log (suma);


//1-b Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
console.log ('Exercise 1-b')
var stringA= 'Esto es una ';
var stringB= 'cadena de texto';
var stringFull= stringA + stringB;

console.log (stringFull);

/*1-c Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
guardando el resultado de la suma en una 3er variable (utilizar length).*/
console.log ('Exercise 1-c')
var stringA= 'Esto es una cadena ';
var stringB= 'de texto, pero distinta';
var stringFull= (stringA + stringB).length;

console.log ('El string tiene ' + stringFull + ' caracteres');
