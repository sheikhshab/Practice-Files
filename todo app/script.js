"use-strict";
const form = document.getElementById("todo-form");
const input = document.getElementById("input");
const todo = document.getElementById("list");
const todos = document.getElementById("todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoinput = input.value;
  if (todoinput) {
    const todoli = document.createElement("li");
    todoli.innerText = todoinput;
    todo.appendChild(todoli);
    input.value = "";

    todoli.addEventListener("dblclick", () => {
      todoli.style.color = "red";
      todoli.style.textDecoration = "line-through";
    });
    todoli.addEventListener("contextmenu", () => {
      todoli.remove();
    });
  }
});
