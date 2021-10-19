const koders = [
    {
      name: "Harold",
      lastName: "López",
      birthday: "1996/06/24",
      generation: 9,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 90
        },
        {
          module: "Backend",
          score: 80
        },
        {
          module: "Cloud",
          score: 80
        }
      ]
    },
  
    {
      name: "Arnold",
      lastName: "Osborn",
      birthday: "1998/05/12",
      generation: 1,
      bootcamp: "Python",
      scores: [
        {
          module: "Frontend",
          score: 90
        },
        {
          module: "Backend",
          score: 100
        },
        {
          module: "Cloud",
          score: 100
        }
      ]
    },
    {
      name: "Peter",
      lastName: "Parker",
      birthday: "1994/10/26",
      generation: 10,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 100
        },
        {
          module: "Backend",
          score: 95
        },
        {
          module: "Cloud",
          score: 80
        }
      ]
    },
    {
      name: "Homer",
      lastName: "Simpson",
      birthday: "1996/06/24",
      generation: 1,
      bootcamp: "Python",
      scores: [
        {
          module: "Frontend",
          score: 98
        },
        {
          module: "Backend",
          score: 100
        },
        {
          module: "Cloud",
          score: 70
        }
      ]
    },
    {
      name: "Ren",
      lastName: "López",
      birthday: "1996/06/24",
      generation: 9,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 80
        },
        {
          module: "Backend",
          score: 90
        },
        {
          module: "Cloud",
          score: 100
        }
      ]
    }
  ];
  //console.log(koders)
  
  /*
  Ejercicio en clase:
  Teniendo la siguiente coleccion de Koders generar una coleccion de objetos de tipo Koder. Agregando además las siguientes funciones:
  */
function koder(name, lastName, bootcamp, birthday, score){

    this.name = name;
    this.lastName = lastName;
    this.birthday = birthday;
    this.bootcamp = bootcamp;
    this.age = getAge(birthday);
    this.average = getAverageScore(score);
}

function getAge(birthday) {

    const today = new Date();
    const currentYear = today.getFullYear();   
    const bornYear = parseInt(birthday.substr(0,4));    

    return currentYear - bornYear;

}

function getAverageScore(scores) {
    
    const average = scores.reduce((accum, current) => {
        accum += current.score / scores.length;
        return accum;
    }, 0);
    
    return average.toFixed(2);    
}


function getArrayKoders(koders){

    const getNewKoders = koders.map(({name, lastName, bootcamp, birthday, scores}) => {
        const koder1 = new koder(name, lastName, bootcamp, birthday, scores);
        return koder1    
    });

    return getNewKoders;
}



console.log(getArrayKoders(koders));


/*
  Prototipo de tipo koder
  
  Obtener la edad a partir de la fecha de nacimiento
  
  Obtener promedio de sus scores
  
  ---
  Colección de Koder que pertenezcan a JavaScript
  
  Colección de Koder que pertenezcan a Python
  
  {
    kavascrip: [
      koder1
    ],
    python: [
      
    ]
  
  }
  */