// script.js

const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Додавання нового завдання
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

function addTask(){

    const text = taskInput.value.trim();

    if(text === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        <div class="left">
            <button class="check-btn"></button>
            <span>${text}</span>
        </div>

        <button class="delete-btn">✖</button>
    `;

    taskList.appendChild(li);

    taskInput.value = "";

    addEvents(li);
}

// Події для checkbox та delete
function addEvents(task){

    const checkBtn = task.querySelector(".check-btn");
    const deleteBtn = task.querySelector(".delete-btn");

    checkBtn.addEventListener("click", () => {

        task.classList.toggle("completed");

        if(task.classList.contains("completed")){
            checkBtn.innerHTML = "✔";
        }else{
            checkBtn.innerHTML = "";
        }
    });

    deleteBtn.addEventListener("click", () => {
        task.remove();
    });
}

// Для готових елементів
document.querySelectorAll("#taskList li").forEach(task => {
    addEvents(task);
});