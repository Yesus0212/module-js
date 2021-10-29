// document.createElement('h1');

// let h1 = $(<h1>hola desde jquery</h1>);
// $('body').html('<h1>hola desde jquery</h1>');
// let h1 = $(<h1>hola desde jquery</h1>);

// Agrega un elemento antes del indicado en el selector
// $('ul').before(h1);
// $('ul').after(h1);
// $('ul').prepend(h1);
// $('ul').hide(h1);
// $('ul').remove(h1);

//




//$('li').click(function)


$('input').click(() => {
    console.log('se escucha');
    const inputSelected = $(".control-wrapper input[type='radio']:checked").val();
    console.log($('#figura'));

    // $('#figura').attr('class', inputSelected);
    $('#figura').removeClass();
    $('#figura').addClass(inputSelected);
});


// Creamos un input y un boton
// cuando el usuario agregue un texto y le de click al button
// se debe pintar abajo y se deben mantener todos los valores
// que han ido agregando
// si el usuario selecciona uno, se deberá colorear
// si selecciona otro, se deberá colorear y descolorear el otro
// (Solo uno puede quedar seleccionado)