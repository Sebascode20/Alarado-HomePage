const navBar = document.getElementById("nav");
const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");
const btnSwitch = document.getElementById("switch");
const navList = document.querySelector(".nav-list");
const logo = document.getElementById("logo");

//Menú hamburguesa

openMenu.addEventListener("click", () => {
  navBar.classList.add("visible");

  document.body.style.overflowY = "hidden";
});

closeMenu.addEventListener("click", () => {
  navBar.classList.remove("visible");

  document.body.style.overflowY = "scroll";
});

//Switch

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");

  document.body.classList.value === "dark"
    ? (openMenu.style.color = "#ffffff")
    : (openMenu.style.color = "#111729");

  if (screen.width >= 280 && document.body.classList.value === "dark") {
    navList.firstElementChild.firstElementChild.style.color = "#ffffff";

    logo.setAttribute("fill", "#ffffff");

    navBar.style.backgroundColor = "#111729";

    closeMenu.style.color = "#ffffff";
  } else if (screen.width >= 280 && document.body.classList.value !== "dark") {
    navList.firstElementChild.firstElementChild.style.color = "#223344";

    //navBar.style.backgroundColor = "#f2f9fe";

    navBar.style.backgroundColor = "#ffffff";

    logo.setAttribute("fill", "#223344");

    closeMenu.style.color = "#111729";
  }

  if (screen.width >= 768 && document.body.classList.value === "dark") {
    navBar.style.backgroundColor = "#111729";
  } else if (screen.width >= 768 && document.body.classList.value !== "dark") {
    navBar.style.backgroundColor = "#f2f9fe";
  }
});
