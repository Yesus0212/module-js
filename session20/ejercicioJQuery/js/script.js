const elements = [];

$('#saveElement').click(() => {
    const inputElement = $("#element").val();    
    elements.push(inputElement);    
    renderElements(elements);
});


const renderElements = (elements) => {
    for(let i = 0; i < elements.length; i++){
        console.log(elements[i]);
        const div = $("<div></div>");
        const p = $("<p></p>").text(elements[i]);
        div.attr('id', i);
        div.addClass("divUnSelect");
        div.append(p);
        div.addClass("pUnSelect");
        $('#groupElements').append(div);
    };
};




