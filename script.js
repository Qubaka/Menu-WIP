"use strict"

const icon = document.querySelector("#menu-icon");
const dropdown = document.querySelector("#dropdown");

const bars = document.querySelectorAll(".bar");

const showDropdownMenu = (shouldShow) => {
  if (!shouldShow) return dropdown.classList.add("hidden");
  dropdown.classList.toggle("hidden");
}

const animateBurger = () => {
  bars.classList.toggle("borgir");
}

// Listeners
icon.addEventListener("click", () => {
  showDropdownMenu(true);
  animateBurger();
});

window.addEventListener("resize", () => {
  return showDropdownMenu(false)
})