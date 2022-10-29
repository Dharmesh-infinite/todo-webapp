let addToDoButton=document.getElementById('add');
let todocontainer=document.getElementById('todo-container');
let inputField=document.getElementById('inputField');

addToDoButton.addEventListener('click',function(){
    var paragraph= document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText=inputField.value;
    if(inputField.value)
    todocontainer.appendChild(paragraph);
    inputField.value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.transform='translate(2px)';
        paragraph.style.textDecoration='line-through';
    })
    paragraph.addEventListener('dblclick',function(){
        todocontainer.removeChild(paragraph);
    })
})