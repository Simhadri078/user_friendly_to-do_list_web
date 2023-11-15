const darkModeToggle = document.getElementById("dark-mode-toggle");
const darkModeLogo = document.getElementById("dark-mode-logo");
const todoList = document.getElementById("todo-list");
const newTaskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-button");


darkModeToggle.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkModeLogo.src = "https://static.vecteezy.com/system/resources/previews/006/618/330/non_2x/sun-icons-sun-icon-isolated-on-black-background-sun-icon-design-illustration-sun-logo-design-vector.jpg"; // Switch to light mode
  } else {
    darkModeLogo.src = "moon.png"; // Switch to dark mode
  }
}

addButton.addEventListener("click", addTask);

function addTask() {
  const taskText = newTaskInput.value;
  if (taskText.trim() !== "") {
    const listItem = document.createElement("li");
    listItem.className = "todo-item";
    listItem.innerHTML = `
                    <input type="checkbox" class = "checkbox">
                    <span>${taskText}</span>
                    <button class="delete-button" id="del-btn">Delete</button>
                `;
    todoList.appendChild(listItem);

    newTaskInput.value = "";
  }
}

todoList.addEventListener("click", (event) => {
  if (event.target.className === "delete-button") {
    event.target.parentElement.remove();
  }else if(event.target.className === "checkbox") {
    const tasks = event.target.parentElement;
    tasks.classList.toggle("completed")
  }
});