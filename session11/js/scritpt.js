let arrayPersons = [
    {
        name: "Phibee", age: 25, voted: true, gender: "mujer"
    },
    {
        name: "Katrinka", age: 26, voted: false, gender: "mujer"
    },
    {
        name: "Bruno", age: 48, voted: false, gender: "hombre"
    },
    {
        name: "Jon", age: 22, voted: true, gender: "hombre"
    },
    {
        name: "Brian", age: 20, voted: false, gender: "hombre"
    },
    {
        name: "Eugene", age: 38, voted: true, gender: "hombre"
    },
    {
        name: "Big Bob", age: 29, voted: true, gender: "hombre"
    },
    {
        name: "Ximena", age: 40, voted: false, gender: "mujer"
    },
    {
        name: "Paulet", age: 37, voted: false, gender: "mujer"
    },
    {
        name: "Harold", age: 45, voted: true, gender: "hombre"
    },
    {
        name: "Gerald", age: 22, voted: false, gender: "hombre"
    },
    {
        name: "Arnold", age: 35, voted: true, gender: "hombre"
    },
    {
        name: "Gelga", age: 28, voted: true, gender: "mujer"
    },
    {
        name: "Lila", age: 18, voted: true, gender: "mujer"
    },
    {
        name: "Rhonda", age: 18, voted: true, gender: "mujer"
    },
]

/*
Usar reduce para obtener la siguiente informacion
- Un array con aquellas personas que se vacunaron
- la edad promedio de todos los vacunados
- un array con aquellas personas que se vacunaron y que son menores a 30 años
- la edad promedio de los no vacunados

function getAverageAgeNotVoted(arrayPersons){

    let index = 0;
    const notVotedPerson = arrayPersons.reduce((acumulate, current) => {         
        !current.voted ? (index++, acumulate += current.age) : acumulate;
        return acumulate;
    }, 0);

    return (notVotedPerson / index).toFixed(2);

}

console.log(getAverageAgeNotVoted(arrayPersons));

function getAverageAgeNotVoted2(arrayPersons){

    const notVotedPerson = arrayPersons.reduce((acumulate, current) => {         
        !current.voted ?acumulate.push(current.age) : acumulate;
        return acumulate;
    }, []);
    
    const average = notVotedPerson.reduce((acum, curre) => {
        return acum += curre;
    } , 0);

    return (average/notVotedPerson.length).toFixed(2);

}

console.log(getAverageAgeNotVoted2(arrayPersons));

/*
- el porcentaje de vacunados vs no vacunados

const porcentajeVacunacion = () => {
  let result = arrayPersons.reduce( (contador, persona) => {
  if(persona.voted ==true){
    contador.push(persona);
  }
  return contador;
}, [])  
let porcentajeVacunados = result.length/arrayPersons.length * 100;
let porcentajeNoVacunados= 100-porcentajeVacunados;
return console.log(`El porcentaje de vacunados es ${porcentajeVacunados} y el de no vacunados es ${porcentajeNoVacunados}`)
}
porcentajeVacunacion();

- el procentaje de mujeres que se vacunaron

overAllWomen=()=>{
    let result = arrayPersons.reduce(function (AllWomen,women){
        // console.log(AllWomen);
        if(women.gender == ‘mujer’ && women.voted){
            AllWomen.voted++;
        }else if(women.gender == ‘mujer’ && !women.voted){
            AllWomen[‘notVoted’]++;
        }
        AllWomen[‘total’] = AllWomen[‘voted’] + AllWomen[‘notVoted’];
        AllWomen[‘percentile’] = (AllWomen[‘voted’]/AllWomen[‘total’])*100
        return AllWomen;
    },{notVoted:0,voted:0})
    console.log(result);
    return result
}
overAllWomen();

- el porcentaje de los hombres que vacunarion
*/

const overAllWomen=(type)=>{
    let result = arrayPersons.reduce(function (AllWomen,women){
        if(women.gender == type && women.voted){
            AllWomen.voted++;
        }else if(women.gender == type && !women.voted){
            AllWomen['notVoted']++;
        }
        AllWomen['total'] = AllWomen['voted'] + AllWomen['notVoted'];
        AllWomen['percentile'] = `${((AllWomen['voted']/AllWomen['total'])*100).toFixed(3)}%`
        return AllWomen;
    },{notVoted:0,voted:0})
    return { [type] : result}
}
console.log(overAllWomen("hombre"));
overAllWomen("mujer");