import store from "../model/store";
import { createList } from "../createList";
import { showList } from "./showList";

export const updateList = () => {
  const todoList = document.querySelector(".main__todo-list");

  switch (store.getState().activeCategory) {
    case 1:
      todoList.remove();
      showList(createList("all"));
      break;
    case 2:
      todoList.remove();
      showList(createList("active"));
      break;
    case 3:
      todoList.remove();
      showList(createList("completed"));
      break;
  }
};
