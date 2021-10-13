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

let songsData = [
    {
        name: "Just like Heaven",
        band: "The Cure",
        releaseYear: "1980",
        statistics: {
            likes: 2545109856,
            reproductions: 4324309,
        }
    },    
    {
        name: "Nikita",
        band: "Elton John",
        releaseYear: "1980",
        statistics: {
            likes: 9409483256,
            reproductions: 9843293,
        }
    },
    {
        name: "Kashmir",
        band: "Led Zeppelin",
        releaseYear: "1980",
        statistics: {
            likes: 20000,
            reproductions: 8000,
        }
    },
    {
        name: "Smells Like Teen Spirit",
        band: "Nirvana",
        releaseYear: "1989",
        statistics: {
            likes: 25000,
            reproductions: 100000,
        }
    }, 
    {
        name: "So What",
        band: "Metallica",
        releaseYear: "1990",
        statistics: {
            likes: 12000,
            reproductions: 95000,
        }
    }, 
    {
        name: "Nothing Else Matters",
        band: "Metallica",
        releaseYear: "1992",
        statistics: {
            likes: 128000,
            reproductions: 915000,
        }
    }, 
    {
        name: "Daze",
        band: "Poets of the Fall",
        releaseYear: "2014",
        statistics: {
            likes: 3548413,
            reproductions: 87095138,
        }
    }, 
    {
        name: "The Sweet Scape",
        band: "Poets of the fall",
        releaseYear: "2018",
        statistics: {
            likes: 26268856,
            reproductions: 2424568,
        }
    }
]

const coverageByMentor = (mentorsArray) => {
    const newMentors = [];
    mentorsArray.forEach((mentor) => {
        let coverage = 0;
        mentor.scores.forEach((mentorData ) => {
            coverage += mentorData.score / mentor.scores.length;
        });
        newMentors.push({ name: mentor.name, coverage})
    });
    return newMentors;
};

//---------------------------------MAPS----------------------------------------------------------
/* 
El MAP, genera un arreglo nuevo, con la misma cantidad de items del arreglo que se recorre.
Cuando usas el MAP siempre se debe usar el return, de lo contrario, generará el arreglo pero vacio. 
Puedo mezclar arrlegos en el MAP
*/

const numbers = [1,4,5];

const newNumbers = numbers.map((number) => {
    return number * 2;
});

console.log(newNumbers, 'newNumbers');


// crear un array de strings con la siguiente forma:
// "Mi nombre es {nombre} y mi promedio es de {promedio}"

const newArrayMentors = coverageByMentor(mentorsArray)
const useMap = newArrayMentors.map((mentors) => {
    return `Mi nombre es ${mentors.name} y mi promedio es de ${mentors.coverage}`;
});

console.log(useMap, 'useMap');

//--------------------------------------FILTER-------------------------------------------------------
/*
A diferencia del MAP, nos devuelve un arreglo, pero con elementos filtrados, para que pueda funcionar correctamente, 
debemos pasarle una condición
*/

const numbers2 = [1,4,5];

const newNumbers2 = numbers2.filter((number) => {
    return number > 2;
});

console.log(newNumbers2, 'newNumbers');


// Genera un arreglo de bandas y canciones que cumplan con el filtro 

const songs = songsData.filter((item) => {
    return item.band === 'The Cure' && item.name === 'Just like Heaven';
});

console.log(songs, 'Bands');