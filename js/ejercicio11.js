//Ejercicio N11

/* 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible) */

let numero = parseInt(prompt('ingrese un numero'));

if (numero % 2 == 0) {
    document.write('El numero ' + numero + ' es divisible en 2');
}
if (numero % 3 == 0) {
    document.write('<br>El numero ' + numero + ' es divisible en 3');
}
if (numero % 5 == 0) {
    document.write('<br>El numero ' + numero + ' es divisible en 5');
}
if (numero % 7 == 0) {
    document.write('<br>El numero ' + numero + ' es divisible en 2');
}
if (numero % 2 != 0 && numero % 3 != 0 && numero % 5 != 0 && numero % 7 != 0) {
    document.write('el numero no es divisible en 2, 3, 5 y 7');
}