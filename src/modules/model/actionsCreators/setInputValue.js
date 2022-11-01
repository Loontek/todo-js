import { SET_INPUT_VALUE } from "../actions/types";

const setInputValue = (value) => {
  return {
    type: SET_INPUT_VALUE,
    value,
  };
};

export default setInputValue;
