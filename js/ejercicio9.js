//Ejercicio N9

/* Escribe un programa que pida una frase y escriba las vocales que aparecen */

let palabra = prompt('Escriba una palabra');

console.log(palabra);
console.log(palabra.length);
console.log(palabra.substr(0, 1));

for (let i = 0; i < palabra.length; i++) {
    if (palabra.substr(i, 1) == 'a' || palabra.substr(i, 1) == 'e' || palabra.substr(i, 1) == 'i' || palabra.substr(i, 1) == 'o' || palabra.substr(i, 1) == 'u')
        document.write(palabra.substr(i, 1));
}