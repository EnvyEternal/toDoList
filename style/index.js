const input = document.querySelector(".input-form");
const add = document.querySelector('.addButton');
const del = document.querySelector('.delButton')
const tasks = document.querySelector('.tasks')

add.addEventListener('click', addTask);


//del.addEventListener('click' delTask);
function addTask(){

    let data = input.value; 
    let newTask = document.createElement('div');
    newTask.classList.add('taskElem');
    tasks.append(newTask);
    newTask.innerHTML = data
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");

    document.body.querySelector('.taskElem').append(x)
    document.querySelector('.input-form').value = ''
        
}




