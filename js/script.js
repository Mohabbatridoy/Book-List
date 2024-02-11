// define document:
let form = document.querySelector('#form_task');
let newTask = document.querySelector('#new_task');
let TaskList = document.querySelector('ul');
let ClearBtn = document.querySelector('#clear_btn');
let filter = document.querySelector('#filter_task');

//define evenlistner:
form.addEventListener('submit',AddTask);
TaskList.addEventListener('click', removeTask);

//define Function: 

//add task function:
function AddTask(e){
    if (newTask.value === ''){
        alert("Please add task");
    }
    else{
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(newTask.value + ''));
        // console.log(li)
        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML = 'x';
        li.appendChild(link);
        TaskList.appendChild(li);
        newTask.value = '';
    }
    e.preventDefault();
}


//Remove Task:
function removeTask(e){
    if(e.target.hasAttribute('href')){
        if(confirm("Are you sure?")){
            let ele = e.target.parentElement;
            ele.remove();
        }
    }
}