const starten = document.querySelector(".button")
const pageOne = document.querySelector(".first-page")
const pageTwo = document.querySelector(".second-page")
const pageThree = document.querySelector(".third-page")
const man = document.querySelector(".man")
const woman = document.querySelector(".woman")
const level = document.querySelector(".level-1")


let counter = 0;
const next = () => {
    if(counter == 0){
        pageOne.classList.add("move-page")
        pageTwo.classList.add("current-page")
        level.style.width = "150px"
        counter++
        console.log(counter)
        console.log(pageTwo.classList)
    }
    else if(counter == 1){
        pageTwo.classList.add("move-page")
        pageThree.classList.add("current-page")
        level.style.width = "300px"
        counter++
    }
    else if(counter == 2){
        
    }
   
};
starten.addEventListener("click",next);
man.addEventListener("click", next);
woman.addEventListener("click", next);