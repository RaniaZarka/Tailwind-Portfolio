//const hamburger = document.querySelector("#hamburger");
//const menu = document.querySelector("#menu");
/* const hlinks = document.querySelectorAll("#hlink");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("bg-transparent");
  console.log("burger is served");
}); */

/* hlinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("bg-white");
  });
}); */

var menu = document.getElementById("menu");
function toggleMenu() {
  menu.classList.toggle("hidden");
  menu.classList.toggle("w-full");
  menu.classList.toggle("h-screen");
}
