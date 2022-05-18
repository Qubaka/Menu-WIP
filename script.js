"use strict"

const icon = document.getElementById("icon");
const options = document.getElementById("options");
const hamburger = document.getElementsByClassName("bar");


icon.addEventListener("click", ()=>{

    options.classList.toggle("dropdown");
    options.classList.toggle("hidden");
    hamburger[0].classList.toggle("ab1");
    hamburger[1].classList.toggle("ab2");


    //icon.classList.toggle("hidden");
    //icon.classList.toggle("flex");
});

/*
const debounce = (callback, delay) => {
    let timer;

    return function (...args) {
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
};

document.addEventListener("DOMContentLoaded", () => {

    const debouncedResize = debounce(function (event) {

        options.classList.toggle("hidden");
        icon.classList.toggle("hidden");
    }, 500);

    input.addEventListener("input", debouncedResize);
});*/