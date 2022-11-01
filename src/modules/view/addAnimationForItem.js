import store from "../model/store";

export const addAnimationForItem = (item, str, delay) => {
  const todoList = document.querySelector(".main__todo-list");

  const maxHeight = store.getState().todoItems.length * 50;

  todoList.style.maxHeight = `${maxHeight}px`;

  item.classList.add(`${str}`);

  setTimeout(() => {
    item.classList.remove(`${str}`);
  }, delay);
};
