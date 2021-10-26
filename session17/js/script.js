/**
 * 1. Crear una function que me genere una persona
 * 2. 
 */

const infoPerson = document.querySelectorAll('input');
const button = document.getElementById('savePerson');
const tBody = document.getElementById('tableBody');
const personList = [
    {
        name: 'jesus',
        lastName: 'solis',
    },
    {
        name: 'mariana',
        lastName: 'lopez',
    },
    {
        name: 'arturo',
        lastName: 'garcia',
    }
];

const createPerson = () => {

    const person = {
        name: '',
        lastName: '',
    }
    
    infoPerson.forEach((input) => {
        person[input] = input.value;
    });

    personList.push(person);
};

const createRow = () => {

    // El While limpia el DOM y crea la tabla con el nuevo arreglo
    while(tBody.lastElementChild) {
        tBody.removeChild(tBody.lastElementChild);
    };

    personList.forEach((person, index) => {

        const row = document.createElement('tr');
    
        const name = document.createElement('td');
        const lastName = document.createElement('td');

        const deleteButton = document.createElement('button');        
        deleteButton.setAttribute('data-person', index);
        
        name.textContent = person.name;
        lastName.textContent = person.lastName;
        deleteButton.textContent = 'Delete';

        row.appendChild(name);
        row.appendChild(lastName);
        row.appendChild(deleteButton);

        tBody.appendChild(row);

        // Agrego el listener al botón de eliminar
        deleteButton.addEventListener('click', (event) => {
            
            // La función closest() me permite encontrar el padre más próximo de mi Botón y con la función remove() elimina el tr padre
            deleteButton.closest('tr').remove();

            // Elimina el elemento del arreglo
            const personIndex = event.target.dataset.person;
            personList.splice(personIndex, 1);   
                 
        });
    });
};


button.addEventListener('click', (e) => {
    createPerson();
    createRow();
    console.log(infoPerson);
});

createRow();
