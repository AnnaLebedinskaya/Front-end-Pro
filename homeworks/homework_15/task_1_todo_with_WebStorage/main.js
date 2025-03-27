document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".js--form");
  const input = document.querySelector(".js--form__input");
  const todosWrapper = document.querySelector(".js--todos-wrapper");

  const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    todosWrapper.innerHTML = "";
    tasks.forEach((task, index) => {
      addTaskToDOM(task.text, task.completed, index);
    });
  };

  const addTaskToDOM = (text, completed = false, index) => {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    if (completed) li.classList.add("todo-item--checked");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;
    checkbox.addEventListener("change", () => toggleTask(index));

    const span = document.createElement("span");
    span.classList.add("todo-item__description");
    span.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("todo-item__delete");
    deleteBtn.textContent = "Видалити";
    deleteBtn.addEventListener("click", () => removeTask(index));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todosWrapper.appendChild(li);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = input.value.trim();
    if (!taskText) return;

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
    loadTasks();
  });

  const toggleTask = (index) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
  };

  const removeTask = (index) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
  };

  loadTasks();
});
