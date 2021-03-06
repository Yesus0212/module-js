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


///////////////////////////////////////////////////// Notaci??n de parentesis /////////////////////////////////////////////////////


const person = {
    nombre: 'ivan',
    apellido: 'diaz'
}
  
const property = 'direccion';
  
// En el if, se valida si la propiedad "direccion" almacenada en la constante property, existe en el arreglo person
if(property in person) {

    // Si existe, entra en la propiedad de direcci??n del arreglo y la m??difica por el texto 'esta es la direcci??n nueva a??adida'
    person[property] = 'esta es la direcci??n nueva a??adida';
}
else{

    // En caso contrario, crea la propierdad de direcci??n en el arreglo y la inserta el texto 'esta es la direcci??n a??adida'
    person[property] = 'esta es la direcci??n a??adida';
}
  
console.log(person);


//////////////////////////////////// Spread operator /////////////////////////////////////////////////////

const otherNumbers = [3, 56, 78];

// Para la notaci??n del Spread operator, forzosamente se deben usar los 3 puntos (...) y el nombre del arreglo que quieres agregar al arreglo
// B??sicamente para lo que sirve, es para mezclar arreglos u objetos en uno solo

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
    avenue: 'ave. revoluci??n',
    number: '120',
    cp: '55039'
}
  
const userData = {...person2, ...addressPerson}
  
console.log(userData);
/* 
{
    nombre: 'ivan',
    apellido: 'diaz',
    direccion: 'esta es la direcci??n a??adida',
    avenue: 'ave. revoluci??n',
    number: '120',
    cp: '55039' 
}
*/

// Si lo ocupamos para destructurar, tomar el resto de las propiedades del objeto que no separaste

const {avenue, ...rest} = addressPerson;

console.log(avenue);
//ave. revoluci??n

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


// Si lo separamos, quedar??a as??:

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