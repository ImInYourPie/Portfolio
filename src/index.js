import "../dist/style/index.css";

window.onload = function() {
  let menuToggler = document.getElementsByClassName("menu-toggler")[0];
  let topNav = document.getElementsByClassName("top-nav")[0];

  menuToggler.addEventListener("click", event => {
    menuToggler.classList.toggle("open");
    topNav.classList.toggle("open");
  });

  let navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(el => {
    el.addEventListener("click", event => {
      menuToggler.classList.toggle("open");
      topNav.classList.toggle("open");
    });
  });
};
