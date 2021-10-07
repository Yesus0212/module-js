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

function createArray(fullNames){

    let koders=[];
    for(names in fullNames){
        koders.push(`Koder ${parseInt(names) + 1} : ${fullNames[names]}`);
    }

    return koders;
}


let fullNames=[];
const times = Number(prompt("¿Cuántos koders deseas registrar?"));

if(times > 0 && times <= 10 && !isNaN(times) && times != null && times != ""){
    for(let i = 1; i <= times; i++){
        fullNames.push(prompt("Ingresa el nombre completo"));    
    }

    console.log(createArray(fullNames));    

}else{
    console.log("Ingresa un número valido");
}
