import { addAnimationForItem } from "./addAnimationForItem";

export const showList = (list) => {
  const main = document.querySelector(".main");

  main.insertAdjacentElement("afterbegin", list);
};
