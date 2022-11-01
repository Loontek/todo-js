import { SHOW_TODO } from "../actions/types";

const showTodo = (bool) => {
  return {
    type: SHOW_TODO,
    bool,
  };
};
export default showTodo;
