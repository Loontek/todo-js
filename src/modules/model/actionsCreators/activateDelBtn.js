import { ACTIVATE_DELETE_BTN } from "../actions/types";

const activateDelBtn = (id) => {
  return {
    type: ACTIVATE_DELETE_BTN,
    id,
  };
};

export default activateDelBtn;
