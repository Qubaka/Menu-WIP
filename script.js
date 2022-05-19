"use strict"

//Utils/Helpers
// const debounce = (callback, delay) => {
//     let timer;
  
//     return function (...args) {
//       if (timer) clearTimeout(timer);
  
//       timer = setTimeout(() => {
//         callback(...args);
//       }, delay);
//     };
// };
function debounce(func, time){
    var time = time || 100; // 100 by default if no param
    var timer;
    return function(event){
        if(timer) clearTimeout(timer);
        timer = setTimeout(func, time, event);
    };
}

const icon = document.querySelector("#menu-icon");
const dropdown = document.querySelector("#dropdown");
const background = document.querySelector("#blur");
const bars = document.querySelectorAll(".bar");
const bod = document.querySelector(".bod");

function showDropdownMenu(shouldShow){
  if (!shouldShow){
      dropdown.classList.add("hidden");
      background.classList.add("hidden");
  }else{
    dropdown.classList.toggle("hidden");
    background.classList.toggle("hidden");
  }
}

const debounceShow = debounce(showDropdownMenu,500);


const animateBurger = () => {
  bars[0].classList.toggle("borgir1");
  bars[1].classList.toggle("borgir2");
  bars[2].classList.toggle("borgir3");
}

// Listeners
background.addEventListener("click", () => {
  showDropdownMenu(true);
  animateBurger();
})
icon.addEventListener("click", () => {
  showDropdownMenu(true);
  animateBurger();
});
window.addEventListener("resize", function(){
  debounceShow(false);
})