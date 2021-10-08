/*
Crear funcion que permita indicar la cantidad de koders a guardar,
que pida tantos nombre completos de koders como se haya indicado, y 
que imprima el nombre del koder y su numero asignado.

Ejemplo:
input   
   - Freddy Krueger
   - Michael Myers
   - Jason Vorhees

output: 
    koder 1: Freddy Krueger
    koder 2: Michael Myers
    koder 3: Jason Vorhees
*/

function createKodersArray(){

    const times = Number(prompt("¿Cuántos koders deseas registrar?"));
    let koders=[];
    if(times > 0 && times <= 10 && !isNaN(times) && times != null && times != ""){

        for(let i = 1; i <= times; i++){
            const fullName = (prompt("Ingresa el nombre completo"));                                     
            const koder = `Koder ${i} : ${fullName} (${iniciales(fullName)})`;
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