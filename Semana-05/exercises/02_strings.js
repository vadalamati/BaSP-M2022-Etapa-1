//2) Strings
console.log ('STRINGS')

/* 2-a Crear una variable de tipo string con al menos 10 caracteres y
convertir todo el texto en mayúscula (utilizar toUpperCase).*/
console.log ('Exercise 2-a')
var normalString = 'Soy un string y toy grande';

console.log (normalString.toUpperCase());

/* 2-b Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5
caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log ('Exercise 2-b')

var string = 'Abecedario';
var miniString = string.substring(0,5); 
console.log (miniString);


/*2-c Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres
guardando el resultado en una nueva variable (utilizar substring).*/
console.log ('Exercise 2-c')
var stringB = 'Soy otro string con más de 10 caracateres';
var miniStringC = stringB.substr(-3, 3);

console.log (miniStringC);

/* 2-d Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera
letra en mayúscula y las demás en minúscula.
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/
console.log ('Exercise 2-d')
var stringC = 'soy una Cadena';
var mayusS = stringC.substring(0, 1).toUpperCase();
var restMin = stringC.substring(1,14) .toLowerCase();
var newFullString = mayusS + restMin;

console.log (newFullString);

/* 2-e Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
console.log ('Exercise 2-e')
var stringAndSpace = 'Tengo espacio';
var spaceInString = stringAndSpace.indexOf(' ');

console.log (spaceInString);

/*Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera
letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, 
toUpperCase, toLowerCase y el operador +).*/

console.log ('Exercise 2-f')

var wordsLarge = 'DEMASIADOS EJERCICIOS'; //Es broma
var wordsLargeA = wordsLarge.substring(0,1).toUpperCase();
var wordsLargePhaseB = wordsLarge.substring(1,10).toLowerCase();
var wordsLargeIndex = wordsLarge.indexOf(' '); // Unica forma que se me ocurrió de clavar el indexOf, de buscar donde 
console.log (wordsLargeIndex);                //estaba el espacio para meter el substring, sin contar manualmente
var wordsLargePhaseC = wordsLarge.substring(11,12).toUpperCase();
var wordsLargePhaseD = wordsLarge.substring(12,21).toLowerCase();
var wordsLargeFinal = wordsLargeA + wordsLargePhaseB + ' ' + wordsLargePhaseC + wordsLargePhaseD;
console.log (wordsLargeFinal);

