/* usando mentorsArray, realizar lo siguiente:
-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )

-Obtener el promedio individual de cada mentor

-Obtener la lista de mentores cuyo promedio sea mayor a 9.5 

-crear un array de strings con la siguiente forma:
    "Mi nombre es {nombre} y mi promedio es de {promedio}"
*/

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

// {
//     name:"Ivan Diaz",
//     scores:[
//         {
//             signature:"HTML",
//             score:8
//         },
//         {
//             signature:"CSS",
//             score:10
//         },
//         {
//             signature:"JS",
//             score:8
//         },
//         {
//             signature:"ReactJS",
//             score:8
//         }
//     ]
// }

const coverageByMentor = (mentorsArray) => {

    const newMentors = mentorsArray.map((mentor) => {
        let coverage = 0;
        mentor.scores.forEach((mentorData) => {
            coverage += mentorData.score / mentor.scores.length;
        });
        return { name: mentor.name, coverage};
    });
    return newMentors;
};

console.log(coverageByMentor(mentorsArray));