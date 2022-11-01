import { ADD_TO_COMPLETED } from "../actions/types";

const addToCompleted = (todo) => {
  return {
    type: ADD_TO_COMPLETED,
    item: { ...todo },
  };
};

export default addToCompleted;
