/*
De una palabra dada, imprimirla al reves
*/

const word = "kodemia";
console.log(word);
let words = word.split("");
words = words.reverse();

let finalWord = "";

words.forEach(
function reverse(word){
    finalWord += word;
});


console.log(finalWord);

////////////////////////// Otra solución /////////////////////////////////////////////////////

// El metodo join junta los elementos del arreglo y los devuelve en un string

let palabra = "Kodemia" //prompt("Ingresa una palabra");
console.log(cambio = palabra.split("").reverse().join(""));



/* Objetos */

const persona = {
    nombre: "freddy",
};

// Forma de acceder a un objeto

console.log(persona['nombre']);
console.log(persona.nombre);

// Forma de agregar un objeto

persona.apellido = 'Krugger';
persona['apellido'] = 'Krugger';
persona.edad = 15;

persona.saludar = function (saludo) {
    return saludo;
};

console.log(persona.saludar("Hola"));
