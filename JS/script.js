const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const navBar = document.querySelector("#navbar ul");

hamburgerMenu.addEventListener("click", (e) => {
  navBar.classList.add("menu-open");
  hamburgerMenu.classList.add("hidden");
  e.stopPropagation();
});

closeIcon.addEventListener("click", () => {
  navBar.classList.remove("menu-open");
  hamburgerMenu.classList.remove("hidden");
});

document.addEventListener("click", () => {
  navBar.classList.remove("menu-open");
  hamburgerMenu.classList.remove("hidden");
});
