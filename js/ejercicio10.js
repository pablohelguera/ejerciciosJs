//Ejercicio N10

/* Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro) */

let numero = parseInt(prompt('ingrese un numero'))


if (numero % 2 == 0) {
    document.write('El numero ' + numero + ' es divisible en 2')
} else if (numero % 3 == 0) {
    document.write('El numero ' + numero + ' es divisible en 3')
} else if (numero % 5 == 0) {
    document.write('El numero ' + numero + ' es divisible en 5')
} else if (numero % 7 == 0) {
    document.write('El numero ' + numero + ' es divisible en 7')
} else {
    document.write('El numero ' + numero + ' no es divisible por 2, 3, 5 ni 7')
}