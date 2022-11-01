import { TOGGLE_COMPLETE_BTN } from "../actions/types";

const toggleCompleteBtn = (id, value) => {
  return {
    type: TOGGLE_COMPLETE_BTN,
    id,
    value,
  };
};

export default toggleCompleteBtn;
