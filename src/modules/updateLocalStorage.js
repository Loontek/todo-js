import store from "./model/store";

export const updateLocalStorage = () => {
  const todos = JSON.stringify(store.getState().todoItems);
  localStorage.setItem("todos", todos);
};
