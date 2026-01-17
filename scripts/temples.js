const button = document.querySelector(".button")
const nav = document.querySelector("nav")

const menuIcon = document.querySelector(".button__menu")
const closeIcon = document.querySelector(".button__close")

button.addEventListener("click", () => {
    nav.classList.toggle("nav--show")
    
    menuIcon.classList.toggle("button__menu--hide")
    closeIcon.classList.toggle("button__close--show")
})