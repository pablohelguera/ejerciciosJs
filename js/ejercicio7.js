//Ejercicio N7

/* Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres. */

let a = parseInt(prompt('Ingrese un numero'));
let b = parseInt(prompt('Ingrese otro numero'));
let c = parseInt(prompt('Ingrese un numero mas por favor'));

if (a >= b && a >= c) {
    document.write(a + ' es el mayor')
} else if (b >= c && b >= a) {
    document.write(b + ' es el mayor')
} else {
    document.write(c + ' es el mayor')
}