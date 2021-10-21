console.log(document);

const h1 = document.createElement("h1");
const text = document.createTextNode("Hola Yesus");

h1.appendChild(text);

document.body.appendChild(h1);

const personas = [
    'arnold',
    'gerald',
    'gelga'
];

const ul = document.createElement('ul');
personas.forEach((persona) => {
    const li = document.createElement('li');
    const text = document.createTextNode(persona);
    li.appendChild(text);
    ul.appendChild(li);
});

document.body.appendChild(ul);