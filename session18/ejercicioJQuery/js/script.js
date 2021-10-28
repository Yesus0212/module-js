$(document).ready(function() {

    // Genero una constante, que va a ser igual a al elemento con el id= "saludo", es como un tipo getElementById
    const myElement = $("#saludo");

    // Le agrego contenido al elemento que obtuve arriba como el textContent
    myElement.text("Hello Yesus!");
    
    // Genero una constante, que va a ser igual al elemento con el id= "saludo" y extraigo su contenido directamente
    const myText = $("#saludo").text();

    // Le agrego contenido directamente a un elemento en el DOM con el id= "clone" igualandolo con el contenido que obtuve arriba
    $("#clone").text(myText); 


});