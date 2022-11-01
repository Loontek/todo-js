import store from "./model/store";
import { listenCheckbox } from "./controller/listenCheckbox";
import { listenDelBtn } from "./controller/listenDelBtn";
// import dragAction from "./model/actionsCreators/dragAction";
import { dragItem } from "./view/dragItem";
import sortTodos from "./model/actionsCreators/sortTodos";

export const createTodoItem = (value, id) => {
  const todoItem = document.createElement("li");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");
  const content = document.createElement("p");
  const delBtn = document.createElement("button");

  todoItem.classList.add("todo-item");
  checkbox.classList.add("todo-item__checkbox", "checkbox");
  content.classList.add("todo-item__text");
  delBtn.classList.add("todo-item__del-btn");
  checkbox.setAttribute("id", `todo-item__checkbox_${id}`);
  checkbox.setAttribute("data-id", `${id}`);
  checkbox.setAttribute("type", "checkbox");
  label.setAttribute("for", `todo-item__checkbox_${id}`);
  delBtn.setAttribute("data-id", `${id}`);
  delBtn.setAttribute("title", "Delete todo button");
  todoItem.setAttribute("data-id", `${id}`);
  delBtn.insertAdjacentHTML(
    "beforeend",
    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>'
  );

  delBtn.addEventListener("click", listenDelBtn);
  checkbox.addEventListener("click", listenCheckbox);

  todoItem.draggable = true;

  todoItem.addEventListener(`dragstart`, (event) => {
    dragItem();
    event.target.classList.add(`todo-item_selected`);
  });

  todoItem.addEventListener(`dragend`, (event) => {
    const todos = document.querySelectorAll(".todo-item");

    store.dispatch(sortTodos(todos));

    event.target.classList.remove(`todo-item_selected`);

    const todoItems = JSON.stringify(store.getState().todoItems);
    localStorage.setItem("todos", todoItems);
  });

  content.textContent = value;

  todoItem.insertAdjacentElement("beforeend", checkbox);
  todoItem.insertAdjacentElement("beforeend", label);
  todoItem.insertAdjacentElement("beforeend", content);
  todoItem.insertAdjacentElement("beforeend", delBtn);

  return todoItem;
};
