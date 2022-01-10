// Dropdown nav

const btnDropdown = document.querySelector(".js-btn-dropdown");
const dropdown = document.querySelector(".dropdown");

function openDropdown(event) {
  event.preventDefault();

  dropdown.classList.toggle("active");
}

btnDropdown.addEventListener("mouseover", openDropdown);

dropdown.addEventListener("mouseleave", openDropdown);

// Menu fixo que troca de cor

const header = document.getElementById("js-header");

function fixedMenu() {
  if (window.pageYOffset > 80) {
    header.classList.add("fixed-menu");
  } else {
    header.classList.remove("fixed-menu");
  }
}

document.addEventListener("scroll", fixedMenu);

// Menu mobile

const btnMenu = document.getElementById("js-btn-menu-mobile");
const overlayMenu = document.querySelector(".js-overlay");

function openMenuMobile(event) {
  event.preventDefault();
  document.documentElement.classList.toggle("menu-opened");
}

btnMenu.addEventListener("click", openMenuMobile);

overlayMenu.addEventListener("click", openMenuMobile);
