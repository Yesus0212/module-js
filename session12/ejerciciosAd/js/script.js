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
  },
  {
    name: "Rudolf",
    lastName: "Reindeer",
    birthday: "1980/03/24",
    generation: 9,
    bootcamp: "C",
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
        score: 70
      }
    ]
  },
  {
    name: "Abraham",
    lastName: "Reyes",
    birthday: "1990/05/13",
    generation: 9,
    bootcamp: "PHP",
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
  },
  {
    name: "Julio",
    lastName: "Cesar",
    birthday: "1978/10/01",
    generation: 1,
    bootcamp: "Java",
    scores: [
      {
        module: "Frontend",
        score: 90
      },
      {
        module: "Backend",
        score: 95
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
  
//Prototipo de tipo koder
  
function koder(name, lastName, bootcamp, birthday, score){  
  this.name = name;
  this.lastName = lastName;
  this.birthday = birthday;
  this.bootcamp = bootcamp;
  this.age = getAge(birthday);
  this.average = getAverageScore(score);
}

// Obtener la edad a partir de la fecha de nacimiento

function getAge(birthday){
  // Obtengo el año actual con la función getFullYear() de la clase Date().
  const currentYear = new Date().getFullYear();
  // Obtengo de la fecha de nacimiento el año (substr()) y lo parseo a un entero
  const bornYear = parseInt(birthday.substr(0,4));    

  // Retorno la edad con la operción del año en curso menos el año de nacimiento
  return currentYear - bornYear;
}

//Obtener promedio de sus scores

function getAverageScore(scores) {
  // Obtengo el promedio de las calificaciones de cada Koder iterando los scores con el reduce()
  const average = scores.reduce((accum, current) => {
    // Se va acumulando el score y se divide entre la longitud del arreglo original
    accum += current.score / scores.length;

    // Retorno el calculo
    return accum;
  }, 0);
  
  // Retorno la constante que se generó con el reduce() y la formateo para que solo envíe dos dígitos con el toFixed()
  return average.toFixed(2);    
}

/*
  Colección de Koder que pertenezcan a JavaScript  
  Colección de Koder que pertenezcan a Python
  
  {
    Javascrip: 
    [
      koder
    ],
    Python: 
    [
      koder
    ]  
  }
*/
 
function getArrayKoders(koders){
  // Itero el arreglo completo con map() y deconstruyo el arreglo en las partes que necesito
  const getKoders = koders.map(({name, lastName, bootcamp, birthday, scores}) => {
    // Al iterar puedo instanciar el constructor koder que genere, de esta forma voy creando los items con la estructura nueva que quiero que se guarde
    // en la nueva constante
    const listKoders = new koder(name, lastName, bootcamp, birthday, scores);
    
    // Retorno cada item a guardar
    return listKoders;
  });

  // Itero el arreglo nuevo con reduce()
  const getKodersByBootcamp = getKoders.reduce((accum, current) => {
    // Evaluó con un operador ternario
    // Si ACCUM es igual a undefined, se crea la estructura nueva del arreglo y se agrega con spread el contenido de CURRENT a ACCUM
    // Si no, se agrega el contenido de CURRENT a ACCUM en la estructura existente 
    accum[current.bootcamp] == undefined ? (accum[current.bootcamp] = [], accum[current.bootcamp] = [...accum, current]) : accum[current.bootcamp] = [...accum, current];

    // Se retorna el resultado
    return accum;
  }, []);

  // Retorno la constante que contiene el resultado del reduce()
  return getKodersByBootcamp;
}

// Pinto en la consola el resultado
console.log(getArrayKoders(koders));
