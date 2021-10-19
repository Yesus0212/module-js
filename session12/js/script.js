const person = {
    name : 'Jesus',
    apellido: ''
};

console.log(person);


const number = [1,2,3];

console.log(number);

const test = new String('este es un string');
console.log(test);


///////////////////////////////////////////// Aquí estamos creando un constructor de tipo persona ///////////////////////////////////////////////////////////////////////////////////

function persona(name, lastName){
    this.name = name;
    this.lastName = lastName;
    ////// Aquí se creó una función oculta
    this.saludar = function () {
        console.log(`hola soy ${this.name}`);
    }
};

const persona1 = new persona('jesus', 'solis');
const persona2 = new persona('yesus', 'christ');

console.log(persona1);
console.log(persona2.saludar());


//////////////////////////////////////////////// Aquí otro constructor, pero con una función tipo flecha ///////////////////////////////////////////////////////////////////////////

function person2(name, lastName){

    this.name = name;
    this.lastName = lastName;

    this.saludar = () => {
        console.log(`Hola soy ${this.name}`)
    }
}

const person2_1 = new person2('julio', 'cesar');

console.log(person2_1.saludar());