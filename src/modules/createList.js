import { createTodoItem } from "./createTodoitem";
import store from "./model/store";

export const createList = (list) => {
  const todoList = document.createElement("ul");

  todoList.classList.add("main__todo-list");

  switch (list) {
    case "all":
      store.getState().todoItems.forEach((todo) => {
        const todoItem = createTodoItem(todo.value, todo.id);

        if (todo.isCompleted) {
          todoItem
            .querySelector(".todo-item__checkbox")
            .setAttribute("checked", null);
        }

        todoList.insertAdjacentElement("beforeend", todoItem);
      });

      return todoList;
    case "active":
      store.getState().active.forEach((todo) => {
        const todoItem = createTodoItem(todo.value, todo.id);

        todoList.insertAdjacentElement("beforeend", todoItem);
      });

      return todoList;
    case "completed":
      store.getState().completed.forEach((todo) => {
        const todoItem = createTodoItem(todo.value, todo.id);

        if (todo.isCompleted) {
          todoItem
            .querySelector(".todo-item__checkbox")
            .setAttribute("checked", null);
        }

        todoList.insertAdjacentElement("beforeend", todoItem);
      });

      return todoList;
  }
};
