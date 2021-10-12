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

function scoreAverageSubject2(mentorsArray){
    let coincidences = [];
    let total = 0;
    mentorsArray.forEach((mentors) => {
        mentors.scores.forEach((scores) => {
            if(scores.signature === scores.signature){
                coincidences.push(scores.signature);                
                total += scores.score;
            }
        });  
        coincidences.push(total);
    });

    console.log(coincidences);
    
}

scoreAverageSubject2(mentorsArray);

/*
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


