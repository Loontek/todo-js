import store from "../model/store";
import activateDelBtn from "../model/actionsCreators/activateDelBtn";
import deleteTodo from "../model/actionsCreators/deleteTodo";
import stopAction from "../model/actionsCreators/stopAction";
import { updateLocalStorage } from "../updateLocalStorage";

export const listenDelBtn = (event) => {
  const id = (function () {
    let id = 0;

    if (event.target.tagName.toLowerCase() === "svg") {
      id = event.target.parentElement.dataset.id;
      return id;
    }

    if (event.target.tagName.toLowerCase() === "path") {
      id = event.target.parentElement.parentElement.dataset.id;
      return id;
    }

    if (event.target.tagName.toLowerCase() === "button") {
      id = event.target.dataset.id;
      return id;
    }
  })();

  store.getState().todoItems.forEach((item) => {
    if (item.id === +id) {
      store.dispatch(activateDelBtn(+id));
    }
  });

  store.dispatch(deleteTodo());
  store.dispatch(stopAction());

  updateLocalStorage();
};
