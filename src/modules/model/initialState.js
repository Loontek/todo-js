const initialState = {
  inputValue: "",
  todoItems: [],
  active: [],
  completed: [],
  activeCategory: 1,
  categories: ["all", "active", "completed"],
  actions: {
    initApplication: false,
    showAction: false,
    completeAction: false,
    deleteAction: false,
    clearCompletedAction: false,
    categorySwitchAction: false,
  },
  activeTheme: "dark",
  themes: {
    dark: {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>',
      colors: {
        "--main-background": "hsl(235, 21%, 11%)",
        "--todo-background": "hsl(235, 24%, 19%)",
        "--white": "hsl(0, 100%, 100%)",
        "--gradient":
          "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
        "--main-text": "hsl(234, 39%, 85%)",
        "--main-text-hover": "hsl(236, 33%, 92%)",
        "--second-text": "hsl(234, 11%, 52%)",
        "--footer-text": "hsl(234, 11%, 52%)",
        "--placeholder": "hsl(234, 11%, 52%)",
        "--border": "hsl(234, 11%, 52%)",
        "--outline": "hsl(234, 11%, 52%)",
        "--shadow": "hsl(240, 20%, 8%)",
        "--active-link": "hsl(220, 98%, 61%)",
      },
    },
    light: {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>',
      colors: {
        "--main-background": "hsl(0, 0%, 98%)",
        "--todo-background": "hsl(0, 100%, 100%)",
        "--white": "hsl(0, 100%, 100%)",
        "--gradient":
          "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
        "--main-text": "hsl(235, 19%, 35%)",
        "--main-text-hover": "hsl(237, 14%, 30%)",
        "--second-text": "hsl(233, 11%, 84%)",
        "--footer-text": "hsl(236, 9%, 61%)",
        "--placeholder": "hsl(236, 9%, 61%)",
        "--border": "hsl(233, 11%, 84%)",
        "--outline": "hsl(233, 11%, 84%)",
        "--shadow": "hsl(235, 32%, 92%)",
        "--active-link": "hsl(220, 98%, 61%)",
      },
    },
  },
};

export default initialState;
