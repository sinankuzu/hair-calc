const starten = document.querySelector(".button")
const pageOne = document.querySelector(".first-page")
const pageTwo = document.querySelector(".second-page")

const next = () => {
    pageOne.style.left = "0";
    pageTwo.style.left = ""
}
starten.addEventListener("click",next)

