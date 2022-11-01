import { SWITCH_CATEGORY } from "../actions/types";

const switchCategory = (category) => {
  return {
    type: SWITCH_CATEGORY,
    value: category,
  };
};

export default switchCategory;
