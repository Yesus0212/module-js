let value = 0;

const labelResult = document.createElement("label");
labelResult.textContent = value;
const buttonInc = document.createElement("button");
buttonInc.textContent = "Increment";
const buttonDec = document.createElement("button");
buttonDec.textContent = "Decrement";

document.body.appendChild(labelResult);

document.body.appendChild(buttonInc);
document.body.appendChild(buttonDec);

buttonInc.addEventListener('click',() => {

    value += 1;
    labelResult.textContent = value;

});

buttonDec.addEventListener('click',() => {

    value -= 1;
    labelResult.textContent = value;
    
});