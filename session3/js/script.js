// Expresión regular, que valida si existen números o simbolos especiales, dentro de un texto.
const regExp = /^[0-9]*$/;

/*
Ejercicio 1:
    Solicitar al usuario su nombre y sus apellidos
    regresar en una sola cadena donde el nombre sea minusculas y los apellidos sean mayusculas
    input nombre = "Ivan"
    input Apellido = "Diaz"
    Output: "fernanda PALACIOS"
*/

function ejercicio1(){
    let names = String(prompt("Ingresa tu nombre:"));
    let lastName = String(prompt("Ingresa tu apellido:"));
    
    //El método test ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especifica.
    // Devuelve true o false.
    if(!regExp.test(names) && names != null && names != ""){
        if(!regExp.test(lastName) && lastName != null && lastName != ""){
            names = names.toLowerCase();
            lastName = lastName.toUpperCase();    
            alert(`${names} ${lastName}`);
        }
        else {
            alert("Ingresa un apellido valido");
        }
    }
    else {
        alert("Ingresa un nombre valido");
    }

}


/*
Ejercicio 2:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/

function ejercicio2(){
    const fullName = String(prompt("Ingresa tu nombre completo:"));
    if(!regExp.test(fullName) && fullName != null && fullName != ""){
        const characteres = fullName.length;
        alert(`Tu nombre completo es ${fullName} y esta formado por ${characteres} caracteres (incluyendo los espacios)`)
    }
    else {
        alert("Ingresa un nombre valido");
    }
    
}


/*
Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/

function ejercicio3(){

    const vowels = "aeiouáéíóúAEIOUÁÉÍÓÚ";

    // De esta forma, puedo integrar una variable a 
    const regExpV = new RegExp(`[${vowels}]`,g);
    
    const fullName2 = prompt("Ingresa tu nombre completo:");
    if(!regExp.test(fullName2) && fullName2 != null && fullName2 != ""){
        // El médoto match, devuelve un arreglo que contiene todas la coincidencias, incluidos los grupos
        // de captura, o null si no se encuentra ninguna coincidencia.
        const vowels = fullName2.match(regExpV);
        if(vowels != null){
            alert(`Tu nombre tiene ${vowels.length} vocales`);
        }
        else{
            alert(`Tu nombre no contiene vocales`);
        }
    }
    else {
        alert("Ingresa un nombre valido");
    }
    
}

/*
Ejercicio 4:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"
    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario
*/

function ejercicio4(){
    
    // Para reemplazar todas las coindicencias, la expresión regular debe tener una /g (bandera de coincidencia global)
    // Por defecto, el metodo replace, solo reemplazará la primer coincidencia.
    const word = /estudiante/g;    
    const text = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado";    
    const repetitions = text.match(word).length;    
    alert(`La palabra estudiante, se repite ${repetitions} veces`)    
    const res = text.replace(word, "Koder")    
    alert(res);
}

/*
Ejercicio 5:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/

function ejercicio5(){

    let largestWord = "";
    const text2 = prompt("Ingresa un texto a validar (palabra más larga):");
    
    function getLargestWords(text2) {
        const words = text2.split(" ");    
        
        // El metodo for of, ejecuta la secuencia por cada elemento del objeto, en este caso el array words
        // que se genera al utilizar el metodo split sobre el texto dado.
        for(let word of words){
            if(word.length > largestWord.length){
                largestWord = word;
            }        
        }
        
        return largestWord;

    }

    alert(getLargestWords(text2));

}

let accion = true, continuar;

while(accion) {

    opcion = Number(prompt("¿Qué ejercicio deseas realizar? \n1 | 2 | 3 | 4 | 5"));
    
    if(opcion > 0 && opcion < 6 && !isNaN(opcion) && opcion != null && opcion != ""){
        switch(opcion){
            case 1:
                ejercicio1();
                break;
            case 2:
                ejercicio2();
                break;
            case 3:
                ejercicio3();
                break;
            case 4:
                ejercicio4();
                break;
            case 5:
                ejercicio5();
                break;
            default:
                alert("Selecciona una opción valida");
                break;
        }      
    }
    else{
        alert("Por favor, escribe una opción valida");
    }

    continuar = String (prompt("¿Deseas realizar otro ejercicio? s (si) || n (no)"));

    if(!regExp.test(continuar) && continuar != null && continuar != "" && continuar.normalize() === "n"){
        accion = false;
        alert("finalizando ejercicio");
    }
    else if(!regExp.test(continuar) && continuar != null && continuar != "" && continuar.normalize() === "s"){
        accion = true;
    }
    else{
        accion = false;
        alert("Opción invalida, ejercicio finalizado");
    }


}
