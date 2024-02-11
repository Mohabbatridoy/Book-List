// define document:
let form = document.querySelector('#form_task');
let newTask = document.querySelector('#new_task');
let TaskList = document.querySelector('ul');
let ClearBtn = document.querySelector('#clear_btn');
let filter = document.querySelector('#filter_task');

//define evenlistner:
form.addEventListener('submit',AddTask);
TaskList.addEventListener('click', removeTask);
ClearBtn.addEventListener('click', clearBtn);
filter.addEventListener('keyup', filterTask);

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

        storeTaskInLocalStorage(newTask.value);

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

//Clear tasks:
function clearBtn(e){
    if(confirm("are you sure to clear all tasks?")){
        TaskList.innerHTML = '';
    }

}


//Filter Task:
function filterTask(e){
    let text = e.target.value.toLowerCase();

    document.querySelectorAll('li').forEach((task)=>{
        let item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }
        else{
            task.style.display = 'none';
        }
    })
}


//store in Local storage:
function storeTaskInLocalStorage(task){
    let tasks;
    if (localStorage.getItem('tasks' === null)){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify('tasks'));
}