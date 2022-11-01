import store from "../model/store";
import { createTodoItem } from "../createTodoitem";
import { addAnimationForItem } from "./addAnimationForItem";

export const showTodoItem = () => {
  const todoList = document.querySelector(".main__todo-list");
  const todoItemsLength = store.getState().todoItems.length;
  const todoItemValue = store.getState().todoItems[todoItemsLength - 1].value;
  const todoItemId = store.getState().todoItems[todoItemsLength - 1].id;

  const newTodoItem = createTodoItem(todoItemValue, todoItemId);

  todoList.insertAdjacentElement("beforeend", newTodoItem);

  addAnimationForItem(newTodoItem, "apear", 500);
};
