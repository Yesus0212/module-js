const inputMentors = document.querySelectorAll('input');
const button = document.getElementById('saveMentor');
const tBody = document.getElementById('listMentors');

// Aqui recibimos el arreglo que obtuvimos en el get y luego lo iteramos para mostrarlo
const renderMentors = (mentorss) => {
    
    // El Object.values nos devuelve el object dentro del object
    const mentors = Object.values(mentorss);

    mentors.forEach(mentor => {
        
        console.log(mentor);

        const row = document.createElement('tr');
    
        const name = document.createElement('td');
        const lastName = document.createElement('td');

        name.textContent = mentor.name;
        lastName.textContent = mentor.lastName;

        row.appendChild(name);
        row.appendChild(lastName);        

        tBody.appendChild(row); 

    });   

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

getMentors();

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
        }        
    });
    
    // Hacemos un llamado al metodo open, donde 
    const URL = "https://js-14va-default-rtdb.firebaseio.com/yesus/.json";

    // El tercer parametro "true" indica si la llamada al endPoint es asincrona
    xhr.open('POST', URL, true);
    xhr.send(JSON.stringify(mentor));
};

const mentor = {
    name: '',
    lastName: '',
}

button.addEventListener('click', () =>{

    inputMentors.forEach((input) => {
        mentor[input.name] = input.value;
    });

    postUser(mentor);

    getMentors();
});



