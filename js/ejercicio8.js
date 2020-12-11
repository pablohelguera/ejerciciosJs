//Ejercicio N7

/* Escribe un programa que pida un número y diga si es divisible por 2  */

let a = parseInt(prompt('Ingrese un sumero'));

if (a % 2 == 0) {
    document.write('El numero ' + a + " es divisible en 2");
} else {
    document.write('El numero ' + a + " no es divisible en 2");
}