/**
 * 
 * /////////////////////////////////////////////////////PETICION GET //////////////////////////////////////////////////////////////////////////////////////////////////

/* 
 * Use XMLHttpRequest (XHR) objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. 
 * This enables a Web page to update just part of a page without disrupting what the user is doing.
*/
XMLHttpRequest

const ul = document.createElement('ul');
document.body.appendChild(ul);

// Aqui recibimos el arreglo que obtuvimos en el get y luego lo iteramos para mostrarlo
const renderUsers = (users) => {
    users.forEach(user => {

        // Invocamos a showUser para crear la lista en el html
        showUser(user);
    });
};

// Aqui recibimos el elemento que se itero en el renderUsers para agregarlo a la lista
const showUser = (user) => {
    const li = document.createElement('li');
    li.textContent = user.name;
    ul.appendChild(li);
};


const getUser = () => {
    const xhr = new XMLHttpRequest();
    
    // Agregamos un listener
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            //console.log(xhr.responseText);

            // Con el metodo JSON.parse convertimos la respuesta del JSON a un arreglo
            const response = JSON.parse(xhr.responseText);

            // Con el metodo JSON.stringify convertimos la un arreglo a un JSON
            //console.log(JSON.stringify(response));

            // Invocamos a renderUsers para que itere el arreglo creado
            renderUsers(response);
        }        
    });
    
    // Hacemos un llamado al metodo open, donde 
    const URL = "https://jsonplaceholder.typicode.com/users";

    // El tercer parametro "true" indica si la llamada al endPoint es asincrona
    xhr.open('GET', URL, true);
    xhr.send();
};

getUser();


/**
 * 
 * /////////////////////////////////////////////////////PETICION POST//////////////////////////////////////////////////////////////////////////////////////////////////
*/

const postUser = () => {
    const xhr = new XMLHttpRequest();
    
    // Agregamos un listener
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            // Con el metodo JSON.parse convertimos la respuesta del JSON a un arreglo
            const response = JSON.parse(xhr.responseText);
            console.log(response);
        }        
    });
    
    // Hacemos un llamado al metodo open, donde 
    const URL = "https://js-14va-default-rtdb.firebaseio.com/.json";

    // El tercer parametro "true" indica si la llamada al endPoint es asincrona
    xhr.open('POST', URL, true);
    xhr.send(JSON.stringify({name:'Ivan', lastName: 'Diaz'}));
};

