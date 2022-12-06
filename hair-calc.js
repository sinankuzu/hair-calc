const starten = document.querySelector(".button")
const pageOne = document.querySelector(".first-page")
const pageTwo = document.querySelector(".second-page")

const next = () => {
    pageOne.style.transition = "all 5s";
    pageOne.style.scale = "1.5"
    pageOne.style.left = "-300px";
    pageTwo.style.transition = "all 1s",
    pageTwo.style.left = "-300px";
}
starten.addEventListener("click",next)

