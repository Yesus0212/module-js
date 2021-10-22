// Metodos para acceder a elementos del DOM

let itemsByTag = document.getElementsByTagName('li');
let itemsByClass = document.getElementsByClassName('item-list');
let itemsById = document.getElementById('ul');

//console.log(itemsByTag, itemsByClass, itemsById);

// El querySelectorAll, busca y selecciona todos los elementos que tomar
// El querySelector, toma solo el primero que encuentra
const itemsQuery = document.querySelectorAll('li');
const itemsQueryAll = document.querySelectorAll('ul');

// console.log(itemsQuery);

// Aquí estamos iterando el itemsQuery que contiene todos los elementos li
itemsQuery.forEach((li) => {
    // console.log(li);

    // Con el atributo classList.add agregamos un clase al elemento
    li.classList.add('bg-success');

    // Con el atributo classList.remove eliminamos la clase al elemento
    li.classList.remove('item-list');
});


// Creamos la constante que contiene el elemento que tiene el id btn-one
const button = document.querySelector("#btn-one");

// Utilizamos la función del button EventListener, que va a escuchar el evento click
button.addEventListener("click", () => {

    // Cada que el evento se realice va a mostrar en consola el mensaje 'se dio clic!!!'
    console.log('se dio click!!!')
});
