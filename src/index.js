import "./index.html";
import "./index.scss";

import store from "./modules/model/store";

import setInputValue from "./modules/model/actionsCreators/setInputValue";
import addTodo from "./modules/model/actionsCreators/addTodo";
import clearCompleted from "./modules/model/actionsCreators/clearCompleted";
import stopAction from "./modules/model/actionsCreators/stopAction";
import initApplication from "./modules/model/actionsCreators/initApplication";
import setTheme from "./modules/model/actionsCreators/setTheme";
import { showTodoItem } from "./modules/view/showTodoItem";
import { showTodosCount } from "./modules/view/showTodosCount";
import {
  listenCategoriesLinks,
  listenCategoriesMobileLinks,
} from "./modules/controller/listenCategoriesLinks";
import {
  toggleCategoryLinkState,
  toggleCategoryMobileLinkState,
} from "./modules/view/toggleCategoryLinkState";
import { updateList } from "./modules/view/updateList";
import { switchCategory } from "./modules/view/switchCategory";
import { toggleTheme } from "./modules/view/toggleTheme";
import { updateLocalStorage } from "./modules/updateLocalStorage";

const input = document.querySelector(".todo-input__text");
const addBtn = document.querySelector(".todo-input__add-btn");
const categoriesLinks = document.querySelectorAll(".main__link");
const categoriesMobileLinks = document.querySelectorAll(".main__mobile-link");
const clearBtn = document.querySelector(".main__clear-btn");
const themeBtn = document.querySelector(".header__theme-btn");

document.addEventListener("DOMContentLoaded", () => {
  addBtn.addEventListener("click", () => {
    if (store.getState().inputValue !== "") {
      store.dispatch(addTodo());
      store.dispatch(stopAction());
      updateLocalStorage();
    }
  });

  document.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "Enter":
        input.blur();
        if (store.getState().inputValue !== "") {
          store.dispatch(addTodo());
          store.dispatch(stopAction());
          updateLocalStorage();
        }
        break;
    }
  });

  clearBtn.addEventListener("click", () => {
    store.dispatch(clearCompleted());
    store.dispatch(stopAction());

    const todos = JSON.stringify(store.getState().todoItems);
    localStorage.setItem("todos", todos);
  });

  input.addEventListener("change", (event) => {
    const value = event.target.value;
    store.dispatch(setInputValue(value));
  });

  themeBtn.addEventListener("click", () => {
    switch (store.getState().activeTheme) {
      case "dark":
        store.dispatch(setTheme("light"));
        store.dispatch(stopAction());
        break;
      case "light":
        store.dispatch(setTheme("dark"));
        store.dispatch(stopAction());
        break;
    }
  });

  switch (localStorage.getItem("theme")) {
    case "dark":
      store.dispatch(setTheme("dark"));
      break;
    case "light":
      store.dispatch(setTheme("light"));
      break;
    default:
      store.dispatch(setTheme("dark"));
  }

  store.dispatch(initApplication());
  store.dispatch(stopAction());
});

store.subscribe(() => {
  if (store.getState().actions.initApplication) {
    toggleCategoryLinkState(
      categoriesLinks[store.getState().activeCategory - 1]
    );

    toggleCategoryMobileLinkState(
      categoriesMobileLinks[store.getState().activeCategory - 1]
    );

    for (let link of categoriesLinks) {
      link.addEventListener("click", listenCategoriesLinks);
    }

    for (let link of categoriesMobileLinks) {
      link.addEventListener("click", listenCategoriesMobileLinks);
    }

    toggleTheme();

    updateList();
  }

  if (store.getState().actions.showAction) {
    showTodoItem();
    input.value = store.getState().inputValue;
  }

  if (store.getState().actions.completeAction) {
    updateList();
  }

  if (store.getState().actions.deleteAction) {
    updateList();
  }

  if (store.getState().actions.clearCompletedAction) {
    updateList();
  }

  if (store.getState().actions.categorySwitchAction) {
    switchCategory();
  }

  if (store.getState().actions.themeSwitchAction) {
    toggleTheme();
  }

  showTodosCount();
});
