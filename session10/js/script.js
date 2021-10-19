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
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
      name:"Alejandra Paez",
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
              score:9
          },
          {
              signature:"ReactJS",
              score:10
          }
      ]
  }
]


///////////////////////////////////////////////////// Notación de parentesis /////////////////////////////////////////////////////


const person = {
    nombre: 'ivan',
    apellido: 'diaz'
}
  
const property = 'direccion';
  
// En el if, se valida si la propiedad "direccion" almacenada en la constante property, existe en el arreglo person
if(property in person) {

    // Si existe, entra en la propiedad de dirección del arreglo y la módifica por el texto 'esta es la dirección nueva añadida'
    person[property] = 'esta es la dirección nueva añadida';
}
else{

    // En caso contrario, crea la propierdad de dirección en el arreglo y la inserta el texto 'esta es la dirección añadida'
    person[property] = 'esta es la dirección añadida';
}
  
console.log(person);


//////////////////////////////////// Spread operator /////////////////////////////////////////////////////

const otherNumbers = [3, 56, 78];

// Para la notación del Spread operator, forzosamente se deben usar los 3 puntos (...) y el nombre del arreglo que quieres agregar al arreglo
// Básicamente para lo que sirve, es para mezclar arreglos u objetos en uno solo

const numbers = [1, 2,  ...otherNumbers, 345];

// si no colocamos los dos puntos, los mezcla como objetos separados
const numberWithOutSpread = [1, 2, otherNumbers, 345];

console.log(numbers);
// Con el Spread   [ 1, 2, 3, 56, 78, 345 ]

console.log(numberWithOutSpread);
// Sin el Spread   [ 1, 2, [ 3, 56, 78 ], 345 ]

numberWithOutSpread.forEach((element) => {
  console.log(element);
});

const person2 = {
    nombre: 'ivan',
    apellido: 'diaz'
}

const addressPerson = {
    avenue: 'ave. revolución',
    number: '120',
    cp: '55039'
}
  
const userData = {...person2, ...addressPerson}
  
console.log(userData);
/* 
{
    nombre: 'ivan',
    apellido: 'diaz',
    direccion: 'esta es la dirección añadida',
    avenue: 'ave. revolución',
    number: '120',
    cp: '55039' 
}
*/

// Si lo ocupamos para destructurar, tomar el resto de las propiedades del objeto que no separaste

const {avenue, ...rest} = addressPerson;

console.log(avenue);
//ave. revolución

console.log(rest);
//{number: '120', cp: '55039'}


/////////////////////////////////////////////////// REDUCE ////////////////////////////////////////////////////////////////////

const numbers2 = [1,5,8,9];

const suma = numbers2.reduce((accum, current,) => {
  console.log(accum, 'Accum');
    // 0 'Accum'
    // 1 'Accum'
    // 6 'Accum'
    // 14 'Accum'

  return accum + current;
}, 0);

console.log(suma, 'suma');
    // 23 'suma'


const getNewCoverageReduce = () => {

    const mentorsCoverage = mentorsArray.map((mentor) => {
        const coverage = mentor.scores.reduce((accum, current) => {
            return accum + current.score / mentor.scores.length;
        }, 0);

        return { name: mentor.name, coverage }
    });
    return mentorsCoverage;
};

console.log(getNewCoverageReduce());


// Si lo separamos, quedaría así:

const getCoverageByMentor = (mentor) => {
    const coverage = mentor.scores.reduce((accum, current) => {
        return accum + current.score / mentor.scores.length;
    }, 0);
    return { name: mentor.name, coverage };
};

const getNewCoverageReduce2 = () => {
    const mentorsCoverage = mentorsArray.map((mentor) => {
        return getCoverageByMentor (mentor)
    });
    return mentorsCoverage;
}

console.log(getNewCoverageReduce2());