import { SORT_TODOS } from "../actions/types";
import store from "../store";

const sortTodos = (todos) => {
  return {
    type: SORT_TODOS,
    list: todos,
    category: store.getState().activeCategory,
  };
};

export default sortTodos;
