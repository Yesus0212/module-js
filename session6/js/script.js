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

//console.log(persona['nombre']);
//console.log(persona.nombre);

// Forma de agregar un objeto

persona.apellido = 'Krugger';
persona['apellido'] = 'Krugger';
persona.edad = 15;

persona.saludar = function (saludo) {
    return saludo;
};

console.log(persona.saludar("Hola"));

const personas = [1, 2, 3]

//////////////////// Destructure /////////////////////////////////

const { saludar, apellido, nombre } = persona;
console.log(saludar("Hola"), 'destructure de un objeto');

const [primero, segundo, tercero] = personas;
console.log(primero, "destructure de un arreglo")


/* 
Ejercio de clase

Entregar esta estructura

{
    id = 1;
    nombre = 'Jesus',
    apellido = 
    iniciales =
}

 */


function createKodersArray(){

    const times = Number(prompt("¿Cuántos koders deseas registrar?"));
    let koders = [];
    if(times > 0 && times <= 10 && !isNaN(times) && times != null && times != ""){

        for(let i = 1; i <= times; i++){
            const fullName = (prompt("Ingresa el nombre completo"));
            const splitName = fullName.split(" ");

            // Aquí estoy generando el objeto, como quiero que se guarde, aquí estaba comentiendo el error de ir agregando las propiedad directamente.
            const koder = {
                id : i,
                nombre : splitName[0],
                apellido : splitName[1],
                iniciales : iniciales(fullName),
            }            

            koders.push(koder);
        };

        console.log(koders);

    }else{
    console.log("Ingresa un número valido");
    };

}

function iniciales (fullName){
    const splitName = fullName.split(" ");
    let iniciales = "";

    for(let i = 0; i < splitName.length; i++){
        iniciales += splitName[i].charAt(0).toUpperCase();
        iniciales += ".";
    } 

    return iniciales;
}


createKodersArray();
