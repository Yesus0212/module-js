// Crear tabla con el sigueinte arreglo

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
                score:10
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            },
        ]
    },
  ]
  

const header = document.getElementById("header_table");
const body = document.getElementById("body_table");


const tr = document.createElement('tr');
const th = document.createElement('th');
th.setAttribute("scope", "col"); 
const text = document.createTextNode("Mentor");
th.appendChild(text);
tr.appendChild(th);

mentorsArray[0].scores.forEach((mentors) => { 
    const th = document.createElement('th');
    th.setAttribute("scope", "col");   
    const text = document.createTextNode(mentors.signature);    
    th.appendChild(text);
    tr.appendChild(th);
});

const thP = document.createElement('th');
thP.setAttribute("scope", "col"); 
const textP = document.createTextNode("Promedio");
thP.appendChild(textP);
tr.appendChild(thP);

header.appendChild(tr);

const trB = document.createElement('tr');
mentorsArray.forEach((mentor) => {   
    const tr = document.createElement('tr'); 
    const th = document.createElement('th');
    th.setAttribute("scope", "row");   
    const textName = document.createTextNode(mentor.name);    
    th.appendChild(textName);
    tr.appendChild(th);

    let accum = 0;
    mentor.scores.forEach((score) => {
        const td = document.createElement('td');
        const textScore = document.createTextNode(score.score); 
        td.appendChild(textScore);
        tr.appendChild(td);

        (accum += score.score / mentor.scores.length).toFixed(2);
    });    

    const tdAverage = document.createElement('td');
    const textAvScore = document.createTextNode(accum);
    tdAverage.appendChild(textAvScore);

    tr.appendChild(tdAverage);

    body.appendChild(tr);
});



