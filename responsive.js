// selecting elements
const humberger = document.querySelector(".burger");
const navbar = document.querySelector(".menu-items");
const logo = document.querySelector(".navbar");
const close = document.querySelector(".x-icon");


// bumberger onClocick
humberger.addEventListener("click", function () {
    navbar.style.right = "0px";
  });
  
  // close onclick
  close.addEventListener("click", function () {
    navbar.style.right = "-270px";
  });