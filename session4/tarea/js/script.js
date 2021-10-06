const expresion = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@°!#$%&/()=?¡¿*+~^-_.";

function randomGenerator(large) {
    
    const words = expresion.split("");
    let randomWord = "$";

    for(let i = 1; i <= large; i++){

        // Con el Math random, puedo generar un número aleatorio entre el 0 y el 1, sin incluir el uno (ejemplo 0.1764782364)
        // Con el Math floor redondeo al número entero más cercano        
        // Pero, si le agrego el (*) y un número como la longitud de mi constante expresion y el + que en este caso es un 0 
        // el número random va a ir desde el 0 a la longitud de la expresion
        let nWord = Math.floor(((Math.random() * words.length) + 0));
        randomWord += words[nWord]
    }
    alert(randomWord);    
}

let accion = true;

while (accion){

    let large = Number(prompt("Ingresa la longitud que deseas que tenga la cadena aleatoria"));

    if((large > 0 && large <= 100) && large != NaN && large != null && large != ""){
        randomGenerator(large);
    }

    const regExp = /^[0-9]*$/;

    let continuar = String(prompt("¿Deseas crear una nueva cadena aleatoria? s / n"));

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