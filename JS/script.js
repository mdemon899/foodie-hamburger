const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const navBar = document.querySelector("#navbar ul");
const goToTop = document.querySelector(".go-to-top a")

hamburgerMenu.addEventListener("click", (e) => {
  navBar.classList.add("menu-open");
  hamburgerMenu.classList.add("hidden");
  e.stopPropagation();
});

navBar.parentElement.addEventListener("click", (e) => {
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

goToTop.addEventListener("click", (e) => {
  document.querySelector("#main-container").scrollTo(0,0)
  e.stopPropagation();
});
