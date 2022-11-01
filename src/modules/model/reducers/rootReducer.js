import {
  ACTIVATE_DELETE_BTN,
  ADD_TODO,
  ADD_TO_COMPLETED,
  CLEAR_COMPLETED,
  DELETE_TODO,
  INIT_APPLICATION,
  SET_INPUT_VALUE,
  SET_THEME,
  SORT_TODOS,
  STOP_ACTION,
  SWITCH_CATEGORY,
  TOGGLE_COMPLETE_BTN,
} from "../actions/types";

const reducer = (state, action) => {
  switch (action.type) {
    case INIT_APPLICATION:
      const todos =
        JSON.parse(localStorage.getItem("todos")) === null
          ? []
          : JSON.parse(localStorage.getItem("todos"));

      return {
        ...state,
        todoItems: [...todos],
        completed: [...todos].filter((todo) => todo.isCompleted),
        active: [...todos].filter((todo) => !todo.isCompleted),
        actions: {
          ...state.actions,
          initApplication: true,
        },
      };
    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.value,
      };
    case ADD_TODO:
      state.todoItems.push(action.item);
      state.active.push(action.item);
      return {
        ...state,
        inputValue: "",
        actions: {
          ...state.actions,
          showAction: true,
        },
      };
    case STOP_ACTION:
      for (let key in state.actions) {
        state.actions[key] = false;
      }
      return {
        ...state,
      };
    case ACTIVATE_DELETE_BTN:
      return {
        ...state,
        todoItems: [...state.todoItems].map((todo) => {
          if (todo.id === action.id) {
            return Object.assign({}, todo, {
              isDel: true,
            });
          }
          return todo;
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        actions: {
          ...state.actions,
          deleteAction: true,
        },
        todoItems: state.todoItems.filter((todo) => !todo.isDel),
        active: state.todoItems.filter(
          (todo) => !todo.isDel && !todo.isCompleted
        ),
        completed: state.todoItems.filter(
          (todo) => !todo.isDel && todo.isCompleted
        ),
      };
    case TOGGLE_COMPLETE_BTN:
      return {
        ...state,
        actions: {
          ...state.actions,
          completeAction: true,
        },
        todoItems: [...state.todoItems].map((todo) => {
          if (todo.id === action.id) {
            return Object.assign({}, todo, {
              isCompleted: action.value,
            });
          }
          return todo;
        }),
      };
    case ADD_TO_COMPLETED:
      state.completed = state.todoItems.filter((todo) => todo.isCompleted);
      state.todoItems = state.todoItems.filter((todo) => !todo.isCompleted);
      state.active = state.todoItems.filter((todo) => !todo.isCompleted);
      return {
        ...state,
        todoItems: [...state.todoItems, ...state.completed],
      };
    case SWITCH_CATEGORY:
      return {
        ...state,
        actions: {
          ...state.actions,
          categorySwitchAction: true,
        },
        activeCategory: action.value,
      };
    case SET_THEME:
      return {
        ...state,
        actions: {
          ...state.actions,
          themeSwitchAction: true,
        },
        activeTheme: action.value,
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        actions: {
          ...state.actions,
          clearCompletedAction: true,
        },
        todoItems: state.todoItems.filter((todo) => !todo.isCompleted),
        completed: [],
      };
    case SORT_TODOS:
      let result = [];
      for (let i = 0; i < action.list.length; i++) {
        state.todoItems.map((todo) => {
          if (todo.id === parseInt(action.list[i].dataset.id)) {
            result.push(todo);
          }
        });
      }
      state.todoItems = [...result];
      return {
        ...state,
        todoItems:
          action.category === 2
            ? [...state.todoItems, ...state.completed]
            : [...state.todoItems],
        active: [...state.todoItems].filter((todo) => !todo.isCompleted),
      };
    default:
      return state;
  }
};

export default reducer;
