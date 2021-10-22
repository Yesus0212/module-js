// Crear tabla con el sigueinte arreglo

[
    {
        name:"Ivan Diaz",
        html: 90,
        css:90,
        js:10,
        reactJs: 90,
        promedio: 9.3
    }
]

const mentorsArray = [
  {
      name:"Ivan Diaz",
      scores:[
          {
              signature:"HTML",
              score:8
          },
          {
              signature:"CSS",
              score:10
          },
          {
              signature:"JS",
              score:8
          },
          {
              signature:"ReactJS",
              score:8
          }
      ]
  },
  {
      name:"Alan Medina",
      scores:[
          {
              signature:"HTML",
              score:8
          },
          {
              signature:"CSS",
              score:7
          },
          {
              signature:"JS",
              score:10
          },
          {
              signature:"ReactJS",
              score:10
          }
      ]
  },
  {
      name:"Elvira Camarillo",
      scores:[
          {
              signature:"HTML",
              score:9
          },
          {
              signature:"CSS",
              score:9
          },
          {
              signature:"JS",
              score:10
          },
          {
              signature:"ReactJS",
              score:9
          }
      ]
  },
  {
      name:"Alejandra Paez",
      scores:[
          {
              signature:"HTML",
              score:10
          },
          {
              signature:"CSS",
              score:10
          },
          {
              signature:"JS",
              score:10
          },
          {
              signature:"ReactJS",
              score:10
          },
      ]
  },
]

const headers = [
    'Mentor',
    'HTML',
    'CSS',
    'JS',
    'REACT',
    'PROMEDIO',
];

const getMentors = mentorsArray.map(( mentor ) => {
    const data = {
        mentor: mentor.name,
    };
    let average = 0    
    mentor.scores.forEach((signature) => {        
        if(!data[signature.signature]) {
            data[signature.signature] = signature.score;
        }
        average += signature.score / mentor.scores.length;  
    });
    data.average = average;
    return data;
});

const headerTable = document.querySelector('thead');
const bodyTable = document.querySelector('tbody');

const tr = document.createElement('tr');

headers.forEach((header) => { 
    const th = document.createElement('th');
    th.setAttribute("scope", "col");   
    const title = document.createTextNode(header);    
    th.appendChild(title);
    tr.appendChild(th);
});

headerTable.appendChild(tr);

getMentors.forEach((mentors) => { 
    const trB = document.createElement('tr');

    for(mentor in mentors){
        const td = document.createElement('td');
        td.textContent = mentors[mentor];

        trB.appendChild(td);
    }    

    const tdButton = document.createElement('td');
    const button = document.createElement('button');
    button.classList.add("btn-danger");
    button.setAttribute("id", "buttonDelete");   
    button.textContent = "Eliminar";

    tdButton.appendChild(button);
    trB.appendChild(tdButton);

    bodyTable.appendChild(trB);   
    
});


const buttonsDelete = document.querySelectorAll("#buttonDelete");

buttonsDelete.forEach((button) => {
    actionDelete(button);
});

function actionDelete(button){
    button.addEventListener("click", () => {
        /*  La propierdad parentNode devuelve el padre del button especificado en el arbol
            const row = button.parentNode;
            --- Para este caso al imprimir lo que nos devuelve la constante row, nos devuelve la td donde esta alojado el botón
            console.log(row);
                
            Podemos ir más arriba con otro parentNode
            const row = button.parentNode.parentNode;
            --- Para este caso al imprimir lo que nos devuelve la constante row, nos devuelve la tr donde esta alojada la td donde esta alojado el botón
            console.log(row);
        */

        // Ya que lo que quiero es eliminar la fila completa del mentor, necesito llegar hasta la tr que contiene al botón
        const row = button.parentNode.parentNode;
        // Con la función removeChild, elimino la tr completa.
        row.parentNode.removeChild(row);

    });
}

