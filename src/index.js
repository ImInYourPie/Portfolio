import "../dist/style/index.css";
import AOS from "aos";
import "aos/dist/aos.css";

window.onload = function() {
  AOS.init({
    easing: "ease",
    duration: 1000
  });

  let menuToggler = document.getElementsByClassName("menu-toggler")[0];
  let topNav = document.getElementsByClassName("top-nav")[0];
  let up = document.getElementsByClassName("up")[0];

  menuToggler.addEventListener("click", () => {
    menuToggler.classList.toggle("open");
    topNav.classList.toggle("open");
  });

  let navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(el => {
    el.addEventListener("click", () => {
      menuToggler.classList.toggle("open");
      topNav.classList.toggle("open");

      document.getElementById("el.href").scrollIntoView({ behavior: "smooth" });
    });
  });

  up.addEventListener("click", () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  });
};
