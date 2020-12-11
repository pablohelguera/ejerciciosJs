//Ejercicio N6

/* Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor. */

let a = parseInt(prompt('Ingrese un numero'));
let b = parseInt(prompt('Ingrese otro numero'));

if (a > b) {
    document.write('El numero ' + a + ' es mayor que el numero ' + b);
} else if (b > a) {
    document.write('El numero ' + b + ' es mayor que el numero ' + a);
} else {
    document.write('El numero ' + b + ' es igual al numero ' + a);
}