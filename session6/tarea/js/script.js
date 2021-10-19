/*
Tomando en cuenta el array songsData 

Ejercicio 1
input: 'The Cure'
output: {
  {
    name: "Just like Heaven",
    band: "The Cure",
    releaseYear: "1980",
    statistics: {
      likes: 2545109856,
      reproductions: 4324309,
    }
  }
}
----------------------------
Ejercicio 2
-Generar el top 5 de las canciones mas escuchadas
-Mostrar la cancion mas reciente
-Mostrar el artista mas gustado a los fans

 */


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
        name: "Just like Heaven",
        band: "The Cure",
        releaseYear: "1981",
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

let nameBand = prompt("Escribe el nombre de la banda a buscar");

const regExp = /^[0-9]*$/;
if(!regExp.test(nameBand) && nameBand != null && nameBand != "" && nameBand != " "){
    let result = searchBand(nameBand);
    console.log(result);
}else{
    console.log(`${nameBand} no es un dato valido`);
}


function searchBand(nameBand){    
    const  coincidences = [];
    
    for(song of songsData){
        if(song.band.toLowerCase() === nameBand.toLowerCase()){
            coincidences.push(song);
        }
    }        
    return coincidences;    
}

// Aquí es para sacar el top 5 de las canciones más reproducidas
// Para este caso, al usar el sort, debemos utilizar la función function(a,b){return a-b} para que ordene correctamente los números de menor a mayor, sin embargo, para este caso
// necesitamos ordenar de mayor a menor, por lo que se cambia el la resta b-a y ocupamos la función .slice del 0 al 5 para obtener solo las 5 canciones más reproducidas
const topFive = songsData.sort( function(a, b){
    return b.statistics.reproductions - a.statistics.reproductions;
}).slice(0, 5);

console.log(topFive);

//Aquí es para sacar la canción más nueva según su releaseYear
const newestSong = songsData.sort( function(a, b){
    return b.releaseYear - a.releaseYear;
}).slice(0, 1);

console.log(newestSong);

//Aquí es para sacar el artista más buscado
const likesArtist = songsData.sort( function(a, b){
    return b.statistics.likes - a.statistics.likes;
}).slice(0, 1);

console.log(likesArtist);

