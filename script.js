const navOpen = document.querySelector(".nav-open-btn");
const navClose = document.querySelector(".nav-close-btn");
const navbar = document.querySelector(".navbar");

navOpen.addEventListener("click", function () {
  navbar.classList.add("nav--open");
});

navClose.addEventListener("click", function () {
  navbar.classList.remove("nav--open");
});
