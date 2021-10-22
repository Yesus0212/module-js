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

// Creamos un array con los titulos de los encabezados
const headers = [
    'Mentor',
    'HTML',
    'CSS',
    'JS',
    'REACT',
    'PROMEDIO',
];


// [
//     {
//         name:"Ivan Diaz",
//         html: 90,
//         css:90,
//         js:10,
//         reactJs: 90,
//         promedio: 9.3
//     }
// ]

// Hacemos un mapeo del arreglo de mentores
const getMentors = mentorsArray.map(( mentor ) => {

    // creamos un arreglo nuevo que se llamará data
    const data = {
        // Contendrá como primer atributo cada nombre de cada mentor
        mentor: mentor.name,
    };
    let average = 0
    
    // Iteramos con un forEach las asignaturas de cada mentor
    mentor.scores.forEach((signature) => {
        
        // Validarmos si el atributo aún no esta asociado al arreglo nuevo 
        if(!data[signature.signature]) {
            
            // Si no existe la asignatura la asocia al nuevo arreglo
            data[signature.signature] = signature.score;
        }

        // A la variable average, le suma todos los scores de todas las materias
        // y las divide entre el largo total de las asignaturas
        average += signature.score / mentor.scores.length;  
    });

    // Agrega el atributo average y lo iguala con el resultado de la variable average
    data.average = average;
return data;
});

// Crear el tabla
// -Crear el thead de la tabla
// crear un row 
// Iterar un arreglo que tenga los heads
// crear un th por cada elemento de ese arreglo  


// -Crear Tbody de la tabla

// Creamos el tag table
const table = document.createElement('table');

// Creamos el tag thead
const theadTable = document.createElement('thead');

// Creamos el tag tr
const tr = document.createElement('tr');

// Iteramos con un forEach los elementos del arrey Heardes
headers.forEach((element) => {

    // Creamos el tag th
    const th = document.createElement('th');

    // Creamos el texto, para añadir cada elemento del array Header
    const title = document.createTextNode(element);

    // Agregamos el texto title a tag th
    th.appendChild(title);

    // Agregamos el th al tag tr
    tr.appendChild(th);
});

// Agregamos al thead el tag de tr
theadTable.appendChild(tr);

// Agregamos al table el tag thead
table.appendChild(theadTable);
// ---------------


// Creamos el tag tbody
const tbody = document.createElement('tbody');

// Iteramos con el forEach el arreglo getMentors
getMentors.forEach((mentor) => {

    // Creamos el tag tr
    const trBody = document.createElement('tr');

    // Iteramos cada elemento de mentor (item de cada getMentors)
    for(element in mentor) {

        // Creamos el tag td
        const td = document.createElement('td');

        // Agregamos el texto al td a través de su atributo textContent
        td.textContent = mentor[element];

        // Agregamos el td al tag tr 
        trBody.appendChild(td);
    }

    // Agregamos el tr al tbody
    tbody.appendChild(trBody);
});


// Agregamos el tbody a la tabla
table.appendChild(tbody);

// Agregamos la tabla al body del HTML
document.body.appendChild(table);