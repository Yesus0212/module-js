////////////////////// Generamos una clase Persona con la palabra reservada class, debe llevar la función constructor donde hacemos el contructor.////////////////////////////////

class Persona {
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }

    // aquí generamos un metodo de la clase Persona, saludar()
    // si utilizo la palabra reservada de static, no necesito instanciar mi clase para acceder a ella
    static saludar() {
        console.log(`hola soy una persona ${this.name}`);
    }
}


const persona = new Persona("Jesus", "Solis");

// aquí estoy invocando el metodo saludar, sin instanciar, lo hago directametne 
Persona.saludar();


///////////////////////////////////////////////// Generamos una segunda clase Koder que extiende de Person ////////////////////////////////////////////////////////////////////////

class Koder extends Persona {

    // Al momento de crear el constructor en una clase Heredada es necesario pasarle los atributos de la clase padre
    constructor(name, lastname, bootcamp, generation){

        // Utilizamos el super, para mandar llamar el contructor de la clase padre
        super(name, lastname);
        this.bootcamp = bootcamp;
        this.generation = generation;
    }

    // Aquí estoy sobre escribiendo el método saludar de la clase padre
    saludar() {
        console.log(`hola soy un koder ${this.name}`);
    }
}


const koder = new Koder("Yesus", "Solis", "JS", "g14");
koder.saludar();
