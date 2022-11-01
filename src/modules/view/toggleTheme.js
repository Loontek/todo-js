import store from "../model/store";

export const toggleTheme = () => {
  const root = document.querySelector(":root");
  const body = document.querySelector("body");
  const themeBtn = document.querySelector(".header__theme-btn");

  switch (store.getState().activeTheme) {
    case "dark":
      themeBtn.firstElementChild.remove();
      themeBtn.insertAdjacentHTML(
        "beforeend",
        store.getState().themes.dark.icon
      );

      body.classList.remove("body_light");
      body.classList.add("body_dark");

      for (let key in store.getState().themes.dark.colors) {
        root.style.setProperty(key, store.getState().themes.dark.colors[key]);
      }

      localStorage.setItem("theme", "dark");
      break;
    case "light":
      themeBtn.firstElementChild.remove();
      themeBtn.insertAdjacentHTML(
        "beforeend",
        store.getState().themes.light.icon
      );

      body.classList.remove("body_dark");
      body.classList.add("body_light");

      for (let key in store.getState().themes.light.colors) {
        root.style.setProperty(key, store.getState().themes.light.colors[key]);
      }

      localStorage.setItem("theme", "light");
      break;
  }
};
