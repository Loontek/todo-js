import store from "../model/store";
import deleteTodo from "../model/actionsCreators/deleteTodo";
import { addAnimationForItem } from "./addAnimationForItem";

export const deleteTodoItem = (todo) => {
  store.getState().todoItems.forEach((todo) => {
    if (todo.isDel) {
      console.log(1);
      const div = document.querySelector(`#todo-item_${todo.id}`);

      addAnimationForItem(div, "disapear", 500);

      div.remove();
    }
  });
};
