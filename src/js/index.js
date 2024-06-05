window.addEventListener("load", function () {
  document.getElementById("h1Header").classList.add("loader");
});

const botaoMenu = document.getElementById("iconeMenu");
const botaoMenuX = document.getElementById("iconeMenuX");
const menuNav = document.getElementById("menuNav");
const header = document.getElementById("header");
var larguraDaJanela = window.innerWidth;

menuNav.style.display = "none";

if (larguraDaJanela < 560) {
  
    botaoMenu.addEventListener("click", () => {
      header.style.display = "none";
      menuNav.style.display = "block";
    });

    botaoMenuX.addEventListener("click", () => {
      menuNav.style.display = "none";
      header.style.display = "block";
    });
}
