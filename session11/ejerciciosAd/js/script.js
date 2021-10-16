//   1-recoger dos dias de tareas
//   2- convertur las duraciones de las tareas en horas, en lugar de minutos
//   3-Filtarar todo lo que tomo dos horas o mas
//   4-Sumar todo
//   5-Multiplica el resultado por una tarifa de hora para facturacion por dia
//   6- produce una cantidad formateada en dolares
//   7-encadenar todos los metodos


const monday = [
    {
        'name'     : 'Write a tutorial',
        'duration' : 180
    },
    {
        'name'     : 'Some web development',
        'duration' : 120
    }
];

const tuesday = [
    {
        'name'     : 'Keep writing that tutorial',
        'duration' : 240
    },
    {
        'name'     : 'Some more web development',
        'duration' : 180
    },
    {
        'name'     : 'A whole lot of nothing',
        'duration'  : 240
    }
];

function joinDays(monday, tuesday){
    const days = [...monday, ...tuesday];    
    return days;
};

const uno = joinDays(monday, tuesday);

//console.log(uno);

function convertMinHour(days){
    const tasks = days.map((task) => {
        const duration = 'duration';
        if(duration in task)    task[duration] = (task[duration] / 60).toFixed(2);
        return task;
    });
    return tasks;   
};

const dos = convertMinHour(uno);

//console.log(dos)

function filterTasks(tasks, duration){
    const tasksfiltered = tasks.reduce((accum, current) => {
        current["duration"] >= duration ? accum = [...accum, current]: accum;
        return accum;
    }, []);

    return tasksfiltered;
};

const tres = filterTasks(dos, 2);

// console.log(tres);


function getTotal(tasksFiltered, tarifa, dollar){
    const total = tasksFiltered.reduce((accum, current) => {
        return accum += Number(current["duration"]);
    }, 0.00);

    const invoice = (total * tarifa).toFixed(2);
    const dollarInvoice = (invoice / dollar).toFixed(2);

    const final = [{[`totalHoras`] : total, [`totalFactura`] : invoice, [`totalFacturaDolares`] : dollarInvoice}];

    return final;

}

const cuatro = getTotal(tres, 300, 22.5)

console.log(cuatro);