let currency, country, monetaryUnit, exchange;

function currencyConverter(currency, exchange) {
    return console.log(`El tipo de cambio en ${country} es de 1 a ${exchange}, $${currency} MXN equivalen a ${Number.parseFloat(currency/exchange).toFixed(2)} ${monetaryUnit}`);
}

function getExchange(country) {

    exchange = 0.00;

    switch(country) {
        case "USA":            
            exchange = 20.53;
            monetaryUnit = "Dolares";            
            break;
        case "EUROPA":
            exchange = 23.8651;
            monetaryUnit = "Euros";
            break;
        case "CANADA":
            exchange = 16.3111;
            monetaryUnit = "Dolares Canadiences";            
            break;
        case "JAPON":
            exchange = 0.18506;
            monetaryUnit = "Yenes";            
            break;
        case "COLOMBIA":
            exchange = 0.00541;
            monetaryUnit = "Pesos Colombianos";            
            break;
        case "BRASIL":
            exchange = 3.77004;
            monetaryUnit = "Reales Brasileños";
            break;
    }

    if(exchange > 0) {
        return true;
    }
    else {
        return false;
    }

}

let accion = true, continuar;
const regExp = /^[0-9]*$/;

while(accion) {

    currency = Number(prompt("¿Qué cantidad en MXN deseas convertir?"));
    
    if(currency > 0 && !isNaN(currency) && currency != null && currency != ""){
        
        country = String(prompt("¿A que país vas a viajar? \n(USA | Europa | Canada | Japon | Colombia | Brasil)"));    
        if(!regExp.test(country) && country != null && country != ""){
            country = country.toUpperCase();
            if(getExchange(country)){
                currencyConverter(currency, exchange);
            }
            else{
                console.log(`${country} no se encuentra dentro de la opciones validas`);
            }
        }
        else {
            console.log("El país que ingresaste, no esta dentro de las opciones validas");
        }
    }
    else{
        console.log("Por favor, escribe una cantidad valida");
    }


    continuar = String (prompt("¿Deseas convertir una cantidad distinta? s (si) || n (no)"));

    if(!regExp.test(continuar) && continuar != null && continuar != "" && continuar.normalize() === "n"){
        accion = false;
        console.log("finalizando ejercicio");
    }
    else if(!regExp.test(continuar) && continuar != null && continuar != "" && continuar.normalize() === "s"){
        accion = true;
    }
    else{
        accion = false;
        console.log("Opción invalida, ejercicio finalizado");
    }


}

