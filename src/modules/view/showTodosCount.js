import store from "../model/store";

export const showTodosCount = () => {
  const todosCounter = document.querySelector(".main__item-counter");
  todosCounter.textContent = `${store.getState().active.length} items left`;
};
