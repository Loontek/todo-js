const categoriesLinks = document.querySelectorAll(".main__link");
const categoriesMobileLinks = document.querySelectorAll(".main__mobile-link");

export const toggleCategoryLinkState = (link) => {
  for (let link of categoriesLinks) {
    link.classList.remove("main__link_active");
  }
  link.classList.add("main__link_active");
};

export const toggleCategoryMobileLinkState = (link) => {
  for (let link of categoriesMobileLinks) {
    link.classList.remove("main__mobile-link_active");
  }
  link.classList.add("main__mobile-link_active");
};
