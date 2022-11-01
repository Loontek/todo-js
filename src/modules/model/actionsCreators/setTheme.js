import { SET_THEME } from "../actions/types";

const setTheme = (value) => {
  return {
    type: SET_THEME,
    value,
  };
};

export default setTheme;
