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

  //-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )

// function scoreAverageSubject2(mentorsArray){
//     let coincidences = [];
//     let total = 0;
//     mentorsArray.forEach((mentors) => {
//         mentors.scores.forEach((scores) => {
//             if(scores.signature === scores.signature){
//                 coincidences.push(scores.signature);                
//                 total += scores.score;
//             }
//         });  
//         coincidences.push(total);
//     });

//     console.log(coincidences);
    
// }

// scoreAverageSubject2(mentorsArray);

/**
 * Funciones que generamos Jairo, Mora y yo
 

function scoreAverageSubject(mentorsArray, subject){
    let coincidences = [];
    let total = 0;
    mentorsArray.forEach((mentors) => {
        mentors.scores.forEach((scores) => {
            if(scores.signature === subject){
                coincidences.push(scores);                
                total += scores.score;
            }
        });    
    });
    total /= coincidences.length;
    console.log(`El promedio de la materia ${subject} es ${total}`);
};

const subjects = ['HTML','CSS','JS','ReactJS'];

subjects.forEach((subject) =>{

    scoreAverageSubject(mentorsArray, subject);

});

function promedioScoreIndividual(datos,promedioIn){
    datos.forEach((data)=>{
        let sum = 0
        let {name,scores} = data
        let cantidad = scores.length 
        scores.forEach((courses)=> sum += courses["score"])
        promedio = sum/cantidad
        data.promedio = promedio 
        promedio > promedioIn ? console.log(data):"";
        if(promedioIn == null){
            console.log(`Mi nombre es ${name} y mi promedio es de ${promedio}`)
        }
    });
};

const averageAbove9 = () => {
    let genius = [];
    let sum = 0;
    let ave = 0;
    let person = [];
    let presentation = '';
    mentorsArray.forEach((element,index) => {
        sum = 0;
        element.scores.forEach(signature => {
            sum += signature.score;
        });
        ave = sum/4;
        if(ave >= 9.25){
            genius.push(element);
        }
        // console.log(element.name + ' average is ' + ave);
        presentation = element.name + ' average is ' + ave;
        person[index]= element.name + ' average is ' + ave;
    });

    console.log(genius);
    console.log('-----------------');
    console.log(person);
    return null;

};
*/

/**
 * Esta es la función que generó Jairo 

//___________________ Ejercicio 1 _____________________
function foundAllCourses(datos){
  const listCourses = []
  const courses = []
  const repetidas = []
  datos.forEach((datos)=>{
    const {scores} = datos
    scores.forEach((data,i)=>{
      const {score,signature} = data
      getSumScoreCourses(listCourses,courses,signature,score,repetidas)
    })
  })
  getAverageForCourses(listCourses,courses,repetidas)
}
function getSumScoreCourses(listCourses,courses,signature,score,repetidas){
  if(listCourses.includes(signature)){
    courses[signature] += score
    repetidas[signature] += 1
  }else{
    listCourses.push(signature)
    courses[signature] = score
    repetidas[signature] = 1
  }
}
function getAverageForCourses(listCourses,courses,contador){
  for(key in listCourses){
    console.log(`El promedio de ${listCourses[key]} es ${courses[listCourses[key]]/contador[listCourses[key]]}`)
  }
}
foundAllCourses(mentorsArray)

*/


/*

Estos son los ejemplos que generó el Mentor, utilizando notación de corchetes, hay que revisar esto
*/

const getCoverageBySignature2 = (mentors) => {
    let signatures = {};

    mentors.forEach((mentor) => {
        mentor.scores.forEach((score) => {

            // Se avalua 
            if(score.signature in signatures) {
                signatures[score.signature] += score.score / mentors.length;
            } else {
                signatures[score.signature] = score.score / mentors.length
            }
        })
    });

    return signatures;

};

console.log(getCoverageBySignature2(mentorsArray))

/*


// Obtener el promedio individual de cada mentor

const coverageByMentor = (mentorsArray) => {
    const newMentors = [];
    mentorsArray.forEach((mentor) => {
        let coverage = 0;
        mentor.scores.forEach((mentorData ) => {
            coverage += mentorData.score / mentor.scores.length;
        });
        console.log(coverage)
        newMentors.push({ name: mentor.name, coverage})
    });
    return newMentors;
};

console.log(coverageByMentor(mentorsArray))

// -Obtener la lista de mentores cuyo promedio sea mayor a 9.5 

const getFilter = () => {
    const newMentos= [];
    coverageByMentor(mentorsArray).forEach(( mentor ) => {
        if(mentor.coverage > 9.5) {
            newMentos.push(mentor)
        }
    })
return newMentos;
};

console.log(getFilter());

*/