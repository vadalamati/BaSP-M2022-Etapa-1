// Functions

console.log ('6 FUNCTIONS');

/*Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar
la función y guardar el resultado en una variable, mostrando el valor de dicha
variable en la consola del navegador.*/
console.log('Exercise 6-a')

function suma (x, y) {
    result = x + y;
    return result;
}

console.log(suma(10, 15));

/*A la función suma anterior, agregarle una validación para controlar si alguno
de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros
tiene error y retornar el valor NaN como resultado.*/
console.log('Exercise 6-b')

function sumaB(x, y){
    if (typeof x === 'number' && typeof y === 'number') {
        result = x + y;
        return result;
    } else {
        alert('Error: one of these parameters are not a number');
        return NaN;
    }
}

console.log(sumaB('a',5));

/*Crear una función validate integer que reciba un número como parámetro
y devuelva verdadero si es un número entero.*/
console.log('Exercise 6-c')

function validateInteger(x){
    isInt = Number.isInteger(x);
    if (isInt === true) {
        return true;
    } 
        else {
            return false
        }
}

console.log (validateInteger(7));

/*A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros.
En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/
console.log('Exercise 6-d')


function sumaC(x, y){
    if (typeof x === 'number' && typeof y === 'number') {
        isIntX = Number.isInteger(x);
        isInty = Number.isInteger(y);
        if (isIntX === true && isInty === true) {
            result = x + y;
            return result;
        }
            else {
                alert('Error: one or both of these numbers are not a integer');
                if (isIntX === false) {
                    return Math.round(x);
                }
                if (isInty === false) {
                    return Math.round(y);
                }
            }
    }
        else { alert('Error: one or both of these parameters are not a number');
        return NaN;
    }
}

console.log (sumaC(6.9,10));



/*Convertir la validación del ejercicio 6d) en una función separada y llamarla
dentro de la función suma probando que todo siga funcionando igual.*/
console.log('Exercise 6-e')

function sumaE(x, y){
    if (typeof x === 'number' && typeof y === 'number') {
        if (validateIntegerSumaE(x, y) === true) {
            result = x + y;
            return result;
        } else {
            alert('Error: one or both of these numbers are not a integer');
            if (isIntX === false) {
                return Math.round(x);
            }if (isInty === false) {
                return Math.round(y);
            }
        }
    } else {
        alert('Error: one or both of these parameters are not a number');
        return NaN;
    }
}

function validateIntegerSumaE(x, y){
    isIntX = Number.isInteger(x);
    isIntY = Number.isInteger(y);
    if (isIntX === true && isIntY === true) {
        return true;
    } else {
        return false;
    }
}
