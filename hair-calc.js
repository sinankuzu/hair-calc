const starten = document.querySelector(".button");
const pageOne = document.querySelector(".first-page");
const pageTwo = document.querySelector(".second-page");
const pageThree = document.querySelector(".third-page");
const man = document.querySelector(".man");
const woman = document.querySelector(".woman");
const level = document.querySelector(".level-1");
const previous = document.querySelector(".back");

let choosen = 0;
let counter = 0;
const next = (e) => {
  if (counter == 0) {
    pageOne.classList.add("move-page");
    pageTwo.classList.add("current-page");
    level.style.width = "150px";
    counter++;
    console.log(counter);

    console.log(pageTwo.classList);
  } else if (counter == 1) {
    pageTwo.classList.add("move-page");
    pageThree.classList.add("current-page");
    level.style.width = "300px";

    if (choosen) {
      if (e.target.classList.contains("man")) {
        woman.classList.remove("selected");
      } else if (e.target.classList.contains("woman")) {
        man.classList.remove("selected");
      }
    }
    if (e.target.classList.contains("man")) {
      man.classList.add("selected");
      choosen = e.target;
    } else if (e.target.classList.contains("woman")) {
      woman.classList.add("selected");
      choosen++;
      choosen == e.target;
    }
    counter++;
  } else if (counter == 2) {
    if (choosen == man) {
    }
  }
};
starten.addEventListener("click", next);
man.addEventListener("click", next);
woman.addEventListener("click", next);

const back = () => {
  if (counter == 1) {
    pageOne.classList.remove("move-page");
    pageTwo.classList.remove("current-page");
    counter--;
  } else if (counter == 2) {
    pageTwo.classList.remove("move-page");
    pageThree.classList.remove("current-page");
    counter--;
  }
};

previous.addEventListener("click", back);
