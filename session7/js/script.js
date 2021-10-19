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

// Arrow functions
// El hosting no funciona con las arrow functions (Pregunta de entrevista)

const resultado = (num1, num2) => { num1 * num2};

// Si son más de dos líneas, el return es obligatorio

const result = (num1, num2) => {
    if(num1) {
        return num1 * num2;
    }
};


// Ciclo forEach, para iterar los arreglos
// En este caso, la variable song, se convertiria en cada uno de los objetos
// El index, solo imprimira el número del indice
// El array, imprimira el arreglo completo el mismo número de veces que objetos contenga

songsData.forEach((song, index, array) => {
    // también podríamos destructurar e imprimir los datos que queramos especificamente
    const { name, band, releaseYear } = song;
    console.log( `${band} === ${name}` )
});



// Aquí estamos usando un arrow function y dentro, estamos utilizando el forEach
const searchSongArrow = (songData, band) => {
    let coincidencias = [];
    songData.forEach((song) => {

        if(song.band === band){
            coincidencias.push(song);
        }
    });

    return coincidencias;

}

console.log(searchSongArrow(songsData, "The Cure"));