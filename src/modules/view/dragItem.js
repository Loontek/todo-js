import { getNextElement } from "../getNextElement";

export const dragItem = () => {
  const todoList = document.querySelector(".main__todo-list");

  todoList.addEventListener(`dragover`, (event) => {
    event.preventDefault();

    const activeElement = todoList.querySelector(`.todo-item_selected`);
    const currentElement = event.target;

    const isMoveable =
      activeElement !== currentElement &&
      currentElement.classList.contains(`todo-item`);

    if (!isMoveable) {
      return;
    }

    const nextElement = getNextElement(event.clientY, currentElement);

    if (
      (nextElement && activeElement === nextElement.previousElementSibling) ||
      activeElement === nextElement
    ) {
      return;
    }

    todoList.insertBefore(activeElement, nextElement);
  });
};
