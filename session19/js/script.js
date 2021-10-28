const inputMentors = document.querySelectorAll('input');
const button = document.getElementById('saveMentor');
const tBody = document.getElementById('listMentors');

// Aqui recibimos el arreglo que obtuvimos en el get y luego lo iteramos para mostrarlo
const renderMentors = (mentorss) => {

    // Elimina todo el contenido de la tabla
    while (tBody.lastElementChild) {
        tBody.removeChild(tBody.lastElementChild);
    }

    if(mentorss != null){
        // El Object.values nos devuelve el valor de la llave en un objeto
        const mentors = Object.values(mentorss);
    
        // Devuelve unicamente el la llave del object
        const mentors2 = Object.keys(mentorss);
    
        // Genera un arreglo de arreglos, devolviendo la llave en un arreglo y su valor en otro 
        const mentors3 = Object.entries(mentorss);
    
        mentors3.forEach(mentor => {
    
            const row = document.createElement('tr');
        
            const tdMentor = document.createElement('td');
            const tdHTML = document.createElement('td');
            const tdCSS = document.createElement('td');
            const tdJS = document.createElement('td');
            const tdREACT = document.createElement('td');
            const tdAverage = document.createElement('td');
    
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.setAttribute('data-mentor', mentor[0]);
    
            tdMentor.textContent = mentor[1]['name'];
            tdHTML.textContent = mentor[1]['html'];
            tdCSS.textContent = mentor[1]['css'];
            tdJS.textContent = mentor[1]['js'];
            tdREACT.textContent = mentor[1]['react'];
            tdAverage.textContent = mentor[1]['average'];
    
            row.appendChild(tdMentor);
            row.appendChild(tdHTML); 
            row.appendChild(tdCSS); 
            row.appendChild(tdJS); 
            row.appendChild(tdREACT); 
            row.appendChild(tdAverage); 
            row.appendChild(deleteButton);       
    
            tBody.appendChild(row); 
    
            deleteButton.addEventListener('click', (event) => {   
                deleteButton.closest("tr").remove();         
                const mentorId = event.target.dataset.mentor;
                deleteUser(mentorId);                              
            });
    
        });      
    }
    else{
        console.log("Arreglo vacio");
    }    

};


/**
 * /////////////////////////////////////////////////////PETICION GET//////////////////////////////////////////////////////////////////////////////////////////////////
*/


const getMentors = () => {

    const xhr = new XMLHttpRequest();    
    // Agregamos un listener
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4 && xhr.status === 200) {            
            const response = JSON.parse(xhr.responseText);
            renderMentors(response);
        }        
    });
    
    // Creamos la constante de la URL del endPoint, para la consulta a la BD en FireBase
    const URL = "https://js-14va-default-rtdb.firebaseio.com/yesus/.json";

    // El tercer parametro "true" indica si la llamada al endPoint es asincrona
    xhr.open('GET', URL, true);
    xhr.send();
};

/**
 * /////////////////////////////////////////////////////PETICION POST//////////////////////////////////////////////////////////////////////////////////////////////////
*/

const postUser = (mentor) => {
    const xhr = new XMLHttpRequest();
    
    // Agregamos un listener
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            // Con el metodo JSON.parse convertimos la respuesta del JSON a un arreglo
            const response = JSON.parse(xhr.responseText);
            getMentors();
        }        
    });
    
    // Hacemos un llamado al metodo open, donde 
    const URL = "https://js-14va-default-rtdb.firebaseio.com/yesus/.json";

    // El tercer parametro "true" indica si la llamada al endPoint es asincrona
    xhr.open('POST', URL, true);
    xhr.send(JSON.stringify(mentor));
};


/////////////////////////////////////// Evento listener click para guardar un elemento a la tabla ////////////////////////////////////////

const mentor = {
    mentor: '',
    html: '',
    css: '',
    js: '',
    react: '',
    promedio: '',
}


button.addEventListener('click', () =>{

    inputMentors.forEach((input) => {
        mentor[input.name] = input.value;
    });

    postUser(mentor);
});


/**
 * /////////////////////////////////////////////////////PETICION DELETE//////////////////////////////////////////////////////////////////////////////////////////////////
*/

const deleteUser = (mentorId) => {
    const xhr = new XMLHttpRequest();    
    const URL = `https://js-14va-default-rtdb.firebaseio.com/yesus/${mentorId}.json`;
    
    // Agregamos un listener
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            // Con el metodo JSON.parse convertimos la respuesta del JSON a un arreglo
            const response = JSON.parse(xhr.responseText);
            getMentors();
        }        
    });
    
    // El tercer parametro "true" indica si la llamada al endPoint es asincrona
    xhr.open('DELETE', URL, true);
    xhr.send();
};

getMentors();
