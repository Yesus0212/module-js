

function ejercicio1(text) {
    
    const words = text.split("");
    let textModify = "";
    let textModify2 = "";

    for(let i = 0; i < words.length; i++){        
        if(i % 2 == 0){
            // Puedo hacerlo desde un array
            textModify += words[i].toUpperCase();
            // Pero tambien puedo hacerlo directo del texto con el metodo charAt
            textModify2 += text.charAt(i).toUpperCase();
        }
        else{
            // Puedo hacerlo desde un array
            textModify += words[i].toLowerCase();
            // Pero tambien puedo hacerlo directo del texto con el metodo charAt
            textModify2 += text.charAt(i).toLowerCase();
        }
    }

    alert(textModify);    
    alert(textModify2);   
};

const regExp = /^[0-9]*$/;
const text = String (prompt("Ingresa un texto"));

if(!regExp.test(text) && text != null && text != ""){
    ejercicio1(text);
}