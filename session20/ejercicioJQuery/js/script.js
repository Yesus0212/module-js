const elements = [];

$('#saveElement').click(() => {
    const inputElement = $("#element").val();    
    elements.push(inputElement);    
    renderElements(elements);
});


const renderElements = (elements) => {

    $('.radioContent').remove();

    elements.forEach((element, index) => {
        const div = $("<div></div>").addClass("radioContent");
        const labelRadio = $("<label></label>").attr({for:index}).text(element);
        const inputRadio = $("<input></input>").attr({type:'radio', name:'card', id:index}).val(index);
        inputRadio.hide();
        div.append(labelRadio);
        div.append(inputRadio);
        $('#groupElements').append(div);        

        inputRadio.click(() => {
            div.siblings().removeClass();
            div.siblings().addClass("radioContent");
            div.addClass("radioSelected");
        });
    });
   
};