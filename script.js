const passwordInput = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const generateBtn = document.getElementById("generateBtn");

const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const digits = document.getElementById("digits");
const symbols = document.getElementById("symbols");

function generatePassword() {
  let chars = "";

  if (lowercase.checked) chars += "abcdefghijklmnopqrstuvwxyz";
  if (uppercase.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (digits.checked) chars += "0123456789";
  if (symbols.checked) chars += "!@$#%^&*()_+-=[]{}";

  if (chars.length === 0) {
    passwordInput.value = "";
    return;
  }

  let password = "";
  const length = Number(lengthInput.value);

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    password += chars[index];
  }

  passwordInput.value = password;
}

lengthInput.addEventListener("input", () => {
  lengthValue.textContent = lengthInput.value;
  generatePassword();
});

generateBtn.addEventListener("click", generatePassword);
lowercase.addEventListener("change", generatePassword);
uppercase.addEventListener("change", generatePassword);
digits.addEventListener("change", generatePassword);
symbols.addEventListener("change", generatePassword);

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordInput.value);
  copyBtn.textContent = "OK";

  setTimeout(() => {
    copyBtn.textContent = "КОПІЯ";
  }, 1000);
});

generatePassword();

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function createTask(text) {
  const task = document.createElement("div");
  task.className = "task";

  task.innerHTML = `
    <span class="circle"></span>
    <span class="task-text">${text}</span>
    <button class="delete-btn">×</button>
  `;

  const circle = task.querySelector(".circle");
  const deleteBtn = task.querySelector(".delete-btn");

  circle.addEventListener("click", () => {
    task.classList.toggle("done");
    circle.textContent = task.classList.contains("done") ? "✓" : "";
  });

  deleteBtn.addEventListener("click", () => {
    task.remove();
  });

  taskList.appendChild(task);
}

function addTask() {
  const text = taskInput.value.trim();

  if (text === "") {
    alert("Введіть завдання!");
    return;
  }

  createTask(text);
  taskInput.value = "";
  taskInput.focus();
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

document.querySelectorAll(".task").forEach((task) => {
  const circle = task.querySelector(".circle");
  const deleteBtn = task.querySelector(".delete-btn");

  circle.addEventListener("click", () => {
    task.classList.toggle("done");
    circle.textContent = task.classList.contains("done") ? "✓" : "";
  });

  deleteBtn.addEventListener("click", () => {
    task.remove();
  });
});