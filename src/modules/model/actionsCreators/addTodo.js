import { ADD_TODO } from "../actions/types";
import store from "../store";

const addTodo = () => {
  return {
    type: ADD_TODO,
    item: {
      id: Date.now(),
      value: store.getState().inputValue,
      isDel: false,
      isCompleted: false,
    },
  };
};

export default addTodo;
