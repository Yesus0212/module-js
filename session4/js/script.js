// const people = {
//     nombre : "Jesus",
//     apellido : "Solis",
//     edad : 35
// };

// // Si dejo el ciclo así, solo va a implimir los atributos del objeto creado
// for(person in people){
//     console.log(person);
// }

// // Sin embargo, si lo itero de esta forma, va a implimir los valores de los atributos
// for(person in people){
//     console.log(people[person]);
// }


/*
    Ejercicio 1:
    Pedir al usuario usuario un numero entre 1 y 10
    Imprimir la tabla de multiplicar de ese número
    p.ej.
    3 x 1 = 3
    3 x 2 = 6
*/

function tablaMultiplicar(){
    let numero = Number(prompt("Introduce un número:"));

    if(numero > 0 && numero <= 10 && !isNaN(numero) && numero != null && numero != ""){
        for(let i=1; i <= 10; i++){
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    }
    else{
        console.log(`El dato ${numero} es invalido`)
    }    
}


/*
Ejercicio 2:
Pedir al usuario un numero entre 10 y 100
Imprimir todos los numeros pares que existen entre 1 y ese numero
*/

function numeroParImpar(){

    let numero = Number(prompt("Introduce un número entre el 10 y el 100:"));
    
    if(numero > 9 && numero <= 100 && !isNaN(numero) && numero != null && numero != ""){
        for(let i=1; i <= numero; i++){
            if((i % 2) == 0) {
                console.log(`El número ${i} es par`);
            }
            else {
                console.log(`El número ${i} es impar`);
            }
        }
    }else {
        console.log(`El número que ingresaste (${numero}) esta fuera del rango`)
    }
           
}

/*
Ejercicio 3:
Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10
*/

function sumaTotal(){
    const cantidad = String(prompt("Ingresa una cantidad:"));

    const numeros = cantidad.split("");

    let sumaTotal = 0;
    for(let numero of numeros){
        sumaTotal += parseInt(numero);
    }

    console.log(sumaTotal);

}

/*
Ejercicio 4:
Imprimir en consola el siguiente patrón

*
**
***
****
*****
******
*******
********
*********
**********

*/

function patron(pieza, numFilas){
    let imprime = "";

    for(let i = 1; i <= numFilas; i++){
        imprime += pieza;
        console.log(`${imprime}`);  
    }

}

const pieza = "*";
const numFilas = 10;


opcion = Number(prompt("¿Qué ejercicio deseas realizar? \n1 | 2 | 3 | 4 "));
    
    if(opcion > 0 && opcion < 5 && !isNaN(opcion) && opcion != null && opcion != ""){
        switch(opcion){
            case 1:
                tablaMultiplicar();
                break;
            case 2:
                numeroParImpar();
                break;
            case 3:
                sumaTotal();
                break;
            case 4:
                patron(pieza, numFilas);
                break;
            default:
                alert("Selecciona una opción valida");
                break;
        }      
    }
    else{
        alert("Por favor, escribe una opción valida");
    }