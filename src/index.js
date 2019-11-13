import "./index.css";

window.onload = function() {
  let menuToggler = document.getElementsByClassName("menu-toggler")[0];
  let topNav = document.getElementsByClassName("top-nav")[0];

  console.log(menuToggler);
  menuToggler.addEventListener("click", event => {
    menuToggler.classList.toggle("open");
    topNav.classList.toggle("open");
  });
};
