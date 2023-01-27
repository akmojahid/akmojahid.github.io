//DOM selection
const todoName = document.getElementById('todo-name');
const todoDetails = document.getElementById('todo-details');
document.querySelector('.today').innerHTML = dateIs();
const addTodo = document.getElementById('create-todo');
//check function

function todoDone() {
    let box = document.querySelectorAll(`input[type="checkbox"]`);
    for (let i = 0; i < box.length; i++) {
        if (box[i].checked) {
            box[i].parentElement.nextElementSibling.classList.add('checked');
        } else {
            box[i].parentElement.nextElementSibling.classList.remove('checked');
        }
    }
}

//close func
function del() {
    let closeItem = document.getElementsByClassName('close');
    let closeArr = Array.from(closeItem);

    for (let i = 0; i < closeArr.length; i++) {
        closeArr[i].onclick = function () {
            closeArr[i].parentElement.remove();
        }
    }
}
//custom emoji set
let imoji = '🚗 🚓 🚕 🛺 🚙 🚌 🚐 👩 👨 🧑 👧 👨‍🦰 👸 😀 😁 😊 🎈 🎆 🎇 🧨 🎎 🎏 🎐 🎑 🧧 '.split(' ');

//add todod
function createTask() {
    if (todoName.value !== '' && todoDetails.value !== '') {
        document.querySelector('.all-todo').innerHTML += ` <div class="todo">
        <div class="todo-ico">
            <input type="checkbox" name="tode-done" class="todo-done done" onclick="todoDone()">
        </div>
        <div class="my-todo">
            <h1 contenteditable="true">${todoName.value}</h1>
            <p>${todoDetails.value}</p>
        </div>
        <i class="close fa-solid fa-trash " title="delate" onclick="del()"></i>
        <span class="imoji">${imoji[Math.round(Math.random() * imoji.length)]}</span>
    </div>`;
        todoName.value = "";
        todoDetails.value = "";
    }
    else {
        alert("add task please");
    }
}

addTodo.addEventListener('click', createTask)
document.addEventListener('keyup', (e) => {
    if(e.key == "Enter"){
        createTask();
    }
})


// today date showing

function dateIs() {
    const date = new Date();
    return `welcome Today ${date.getDate()}/${date.getMonth() + 1}/ ${date.getFullYear()}`;
}

