// DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add Task
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        createTask(taskText);
        taskInput.value = ""; // Clear input
    } else {
        alert("Please enter a task.");
    }
});

// Create Task Item
function createTask(taskText) {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    // Task Text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Complete Button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
    });

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(completeBtn);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
}
