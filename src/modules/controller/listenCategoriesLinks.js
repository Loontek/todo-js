import store from "../model/store";
import switchCategory from "../model/actionsCreators/switchCategory";
import {
  toggleCategoryLinkState,
  toggleCategoryMobileLinkState,
} from "../view/toggleCategoryLinkState";
import stopAction from "../model/actionsCreators/stopAction";

export const listenCategoriesLinks = (event) => {
  event.preventDefault();
  const category =
    store.getState().categories.indexOf(event.target.dataset.category) + 1;

  store.dispatch(switchCategory(category));

  store.dispatch(stopAction());

  toggleCategoryLinkState(event.target);
};

export const listenCategoriesMobileLinks = (event) => {
  event.preventDefault();
  const category =
    store.getState().categories.indexOf(event.target.dataset.category) + 1;

  store.dispatch(switchCategory(category));

  store.dispatch(stopAction());

  toggleCategoryMobileLinkState(event.target);
};
