
let accion = true;

while (accion) {

    let opcion = Number(prompt("¿Qué ejercicio deseas ejecutar? \n1 - Numero Par Impar; 2 - Numero Menor Mayor; 3 - Peso Lunar; 4 - Equivalencia de Calificaciones."));

    if(!isNaN(opcion) && opcion != null && opcion != ""){
        switch (opcion) {
            case 1:
                parImpar();
                break;
            case 2:
                menorMayor();
                break;
            case 3:
                pesoLunar();
                break;
            case 4:
                equivalenciaCalif();
                break;
            default:
                console.log("Opción invalida, selecciona del 1 al 4")
                break;
        }
        let continuar = prompt("¿Deseas realizar otro ejercicio? s(si) || n(no)");
    
        if(continuar.normalize() === "n"){
            accion = false;
            console.log("finalizando ejercicio");
        }
    }
    else{
        console.log("Opción invalida");
    }
    
}



// 1. Pedir al usuario por prompt un numero entre 1 y 100
//    - Verificar si es un par o impar e imprimir en resultado en consola

function parImpar (){
    let numero = Number(prompt("Ingresa un número del 1 al 100"));
    
    if((numero >= 1 && numero <=100) && !isNaN(numero) && numero != null && numero != ""){
        if(numero % 2 == 0){
            console.log(`El número ${numero} es par`);
        }
        else{
            console.log(`El número ${numero} es impar`);
        }
    }
    else{
        console.log("Dato invalido");
    }
}

// 2. Pedir al usuario 2 numeros
//    - Imprimir en consola cual es el menor de los 2
//    - Imprimir en consola cual es el mayor de los 2

function menorMayor() {
    let numero1 = Number(prompt("Introduce un número:"));
    let numero2 = Number(prompt("Introduce un segundo número:"));
    
    if((!isNaN(numero1) && numero1 != null && numero1 != "") && (!isNaN(numero2) && numero2 != null && numero2 != "")){
        if(numero1 > numero2){
            console.log(numero1, " es mayor a ", numero2);
        } 
        else {
            console.log(numero2, " es mayor a ", numero1);
        }
    }
    else{
        console.log("Alguno de los datos es invalido");
    }
}


   
// 3. Pedir al usuario los siguientes datos a un usuario (nombre, peso actual en kg):
//    - Calcular el peso que tendria esa persona en la luna en Imprimirlo en consola

function pesoLunar() {
    let nombre, pesoTerrestre, pesoLunar, gravedadTierra = 9.8, gravedadLuna = 1.622; 
    
    nombre = String(prompt("Ingresa tu nombre:"));
    pesoTerrestre = Number(prompt("¿Cuánto pesas? (en kg)"));
    
    if((!isNaN(nombre) && nombre != null && nombre != "") && (!isNaN(pesoTerrestre) && pesoTerrestre != null && pesoTerrestre != "")){
        pesoLunar = (pesoTerrestre / gravedadTierra) * gravedadLuna;
        console.log(`${nombre} tu peso en la luna sería de ${pesoLunar} kg`);
    }
    else{
        console.log("Alguno de los datos es invalido");
    }
}


// 4. Pedir al usuario la calificación de un examen ( 0 a 100) por el prompt:
//    -Imprimir en consola las equivalencias en letra su calificación, es decir:
   
// si es mayor o igual a 90, imprimir "A"
// si es mayor o igual a 80 y menor que 90 , imprimir "B"   
// si es mayor o igual a 70 y menor que 80 , imprimir "C"   
// si es mayor o igual a 60 y menor que 70 , imprimir "D"   
// si es mayor o igual a 50 y menor que 60 , imprimir "E"   
// si es menor 50 , imprimir "F"

function equivalenciaCalif() {
    let calificacion = Number(prompt("Ingresa la calificación del examen (0 al 100)"));
    
    if((calificacion >= 0 && calificacion <=100) && !isNaN(calificacion) && calificacion != null && calificacion != ""){
        if(calificacion >= 90){
            console.log('A');
        }
        else if(calificacion >= 80 && calificacion < 90){
            console.log('B');
        }
        else if(calificacion >= 70 && calificacion < 80){
            console.log('C');
        }
        else if(calificacion >= 60 && calificacion < 70){
            console.log('D');
        }
        else if(calificacion >= 50 && calificacion < 60){
            console.log('E');
        }
        else{
            console.log('F');
        }
    }
    else{
        console.log("La calificación que insertaste esta fuera del rango");
    }
}
