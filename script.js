let isDarkMode = false;
let isSerif = false;

function addTask() {
  const taskInput = document.getElementById("newTask");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskSpan.onclick = function () {
    toggleComplete(this);
  };
  li.appendChild(taskSpan);

  taskSpan.ondblclick = function () {
    editTask(this);
  };

  const deleteButton = document.createElement("span");
  deleteButton.textContent = "X";
  deleteButton.className = "close";
  deleteButton.onclick = function () {
    deleteTask(this);
  };
  li.appendChild(deleteButton);

  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}

function deleteTask(element) {
  const li = element.parentNode;
  li.remove();
}

function editTask(element) {
  const newText = prompt("Edit Task:", element.textContent);
  if (newText) {
    element.textContent = newText;
    element.onclick = function () {
      toggleComplete(this);
    };
  }
}

function toggleComplete(element) {
  element.classList.toggle("completed");
}

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

function changeFontSize(change) {
  const currentSize = window.getComputedStyle(document.body).fontSize;
  const newSize = parseFloat(currentSize) + change;
  document.body.style.fontSize = newSize + "px";
}

function toggleDarkMode() {
  isDarkMode = !isDarkMode; // Toggle the dark mode state
  if (isDarkMode) {
    document.body.style.backgroundColor = "#333"; // Set background to dark
    document.body.style.color = "#fff"; // Set text color to white
  } else {
    document.body.style.backgroundColor = ""; // Reset to default background
    document.body.style.color = ""; // Reset to default text color
  }
}
