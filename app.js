// Elements
const inputElement = document.querySelector("#input");
const addButtonElement = document.querySelector("#addbutton");
console.log(inputElement);
const ulElement = document.querySelector("#list");
const todos = [];
let key = 0;

addButtonElement.addEventListener("click", () => {
  if (inputElement.value !== "") {
    let todo = {
      key: key,
      value: inputElement.value,
    };
    todos.push(todo);

    renderTodos();

    inputElement.value = "";
    todo.key++;
  }
});
function renderTodos() {
  ulElement.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center mb-1";
    li.innerHTML = `
        ${todo.value}
        <div>
          <button class="btn btn-outline-danger deletebutton" data-key="${todo.key}">Sil</button>
        </div>
      `;
    ulElement.prepend(li);
  });
}

ulElement.addEventListener("click", (event) => {
  if (event.target.classList.contains("deletebutton")) {
    const key = parseInt(event.target.getAttribute("data-key"));
    todos.splice(
      todos.findIndex((todo) => todo.key === key),
      1
    );
    renderTodos();
  }
});
