const starten = document.querySelector(".button");
const pageOne = document.querySelector(".first-page");
const pageTwo = document.querySelector(".second-page");
const pageThree = document.querySelector(".third-page");
const pageThreeMan = document.querySelector(".man-page");
const pageThreeWoman = document.querySelector(".woman-page");
const man = document.querySelector(".man");
const woman = document.querySelector(".woman");
const level = document.querySelector(".level-1");
const previous = document.querySelector(".back");

let choosen = 0;
let counter = 0;
const next = (e) => {

    // First page 

  if (counter == 0) {
    pageOne.classList.add("move-page");
    pageTwo.classList.add("current-page");
    level.style.width = "150px";
    counter++;
    console.log(counter);

    console.log(pageTwo.classList);
  } 

  // Second page
  
  else if (counter == 1) {
    pageTwo.classList.add("move-page");

    level.style.width = "300px";

    // choosen man or woman
    if (choosen != 0) {

        // Adding and removing white border due the choice

      if (e.target.classList.contains("man")) {
        woman.classList.remove("selected");
      } else if (e.target.classList.contains("woman")) {
        man.classList.remove("selected");
      }
    }
    if (e.target.classList== "man") {
      man.classList.add("selected");
      choosen = "man";

    } 
    else if (e.target.classList== "woman") {
      woman.classList.add("selected");
      choosen = "woman";
      console.log("woman")
      
    }
    console.log(choosen)
    
    if (choosen == "woman") {
        pageThreeWoman.classList.add("current-page");
        console.log("tiklandi kadin")
        
      }

    else if (choosen =="man") {
        pageThreeMan.classList.add("current-page");
        console.log("tiklandi erkek")
    }
   

    counter++;
  } 
  
  // Third page

  else if (counter == 2) {
    if (choosen == man) {
    }
  }
};


starten.addEventListener("click", next);
man.addEventListener("click", next);
woman.addEventListener("click", next);

// Back function

const back = () => {
    if(counter==0){
        level.style.width = "75px";
    }
  else if (counter == 1) {
    pageOne.classList.remove("move-page");
    pageTwo.classList.remove("current-page");
    level.style.width = "150px";
    counter--;
  } else if (counter == 2) {
    pageTwo.classList.remove("move-page");
    pageThree.classList.remove("current-page");
    level.style.width = "300px";
    counter--;
  }
};

previous.addEventListener("click", back);
