import store from "../model/store";
import toggleCompleteBtn from "../model/actionsCreators/toggleCompleteBtn";
import addToCompleted from "../model/actionsCreators/addToCompleted";
import stopAction from "../model/actionsCreators/stopAction";
import { updateLocalStorage } from "../updateLocalStorage";

export const listenCheckbox = (event) => {
  const id = event.target.dataset.id;
  const state = event.target.checked;

  store.dispatch(toggleCompleteBtn(+id, state));
  store.dispatch(addToCompleted());
  store.dispatch(stopAction());

  updateLocalStorage();
};
