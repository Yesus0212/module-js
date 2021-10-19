/*
Ejercicio:
*/
const songsData = [
    {
        name: "¿Dónde jugarán los niños?",
        band: "Maná",
        releaseYear: "1992",
        statistics: {
            likes: 20000,
            reproductions: 8000
        },
    },
    {
        name: "La muralla verde",
        band: "Enanitos Verdes",
        releaseYear: "1986",
        statistics: {
            likes: 21000,
            reproductions: 19000
        },
    },
    {
        name: "Te Ví En Un Tren",
        band: "Enanitos Verdes",
        releaseYear: "1987",
        statistics: {
            likes: 20000,
            reproductions: 23490
        },
    },
    {
        name: "Mariposa Traicionera",
        band: "Maná",
        releaseYear: "2002",
        statistics: {
            likes: 12000,
            reproductions: 25690
        },
    },
    {
        name: "Rayando el Sol",
        band: "Maná",
        releaseYear: "1990",
        statistics: {
            likes: 12000,
            reproductions: 18000
        },
    },
    {
        name: "La celula que explota",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12000,
            reproductions: 23421
        },
    },
    {
        name: "No dejes que...",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12345,
            reproductions: 10000
        },
    }
]

// [
//     'banda1',
//     'banda2',
// ];

/*
- Agrupar los nombres de la bandas, que no esten repetidas
*/

// Intentar usar el spread operator

function getBands(songsData){

    const reduceBands = songsData.reduce((accum, current) => {
        accum.push(current.band);        
        return [...new Set(accum)];
    },[]);

    return reduceBands;
}

console.log(getBands(songsData));


function getBands2(songsData){

    const reduceBands = songsData.map(({band}) => band).reduce((accum, current) =>  {
        if(!accum.includes(current))  accum.push(current);
        return accum;
    },[]);

    return reduceBands;
}

//console.log(getBands2(songsData));


/*
- Agrupar las canciones por banda
    {
        name: "No dejes que...",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12345,
            reproductions: 10000
        },
    }
*/

function getGroupSongsBYBand(songsData){

    const list = songsData.reduce((accum, current) => {
      accum[current.band] == undefined ? accum[current.band] = [current.name] : accum[current.band].push([current.name]);  
      return accum;
    },[]);
  
    return list;
  
}

console.log(getGroupSongsBYBand(songsData));


/*
- La cancion con más reproducciones
- La cancion con más likes
*/

function getPopularSong(songsData, statisticType){

    const result = songsData.reduce((accum, current) => {        
        
        if(current["statistics"][statisticType] > accum["statistics"][statisticType]){
            return current;
        } else {
            return accum;
        }
    });

    return `La canción con más ${statisticType} es ${result.name} de ${result.band} con ${result["statistics"][statisticType]}`;

}

//console.log(getPopularSong(songsData, "likes"));
//console.log(getPopularSong(songsData, "reproductions"));


function songFor(songsData) {
    const result = songsData.reduce((acumulado, items) => {
        let nuevoNombre = items.band;
        let nombreSeparado = nuevoNombre.split(" ");
        let nombreFinal = `${nombreSeparado[0].toLowerCase()}${nombreSeparado[1]?nombreSeparado[1]:""}`
        acumulado[nombreFinal] == undefined ? acumulado[nombreFinal] = [items.name] : acumulado[nombreFinal].push(items.name);

        return acumulado;
    }, {});

    return result;
};

console.log(songFor(songsData));