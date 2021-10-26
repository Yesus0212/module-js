// 

const inputs = document.querySelectorAll('input');
console.log(inputs);

inputs.forEach((input) => {

    input.addEventListener('keyup', (event) => {
        console.log(event);
    });

});





