const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved) taskList.innerHTML = saved;
}
function addTask() {
  const taskText = taskInput.value;
  if (!taskText) return;
  const li = document.createElement("li");
  li.textContent = taskText;
  li.onclick = () => {
    li.remove();
    saveTasks();
  };
  taskList.appendChild(li);
  taskInput.value = "";
  saveTasks();
}
function saveTasks() {
  localStorage.setItem("tasks", taskList.innerHTML);
}
window.onload = loadTasks;