const divMenu = document.querySelector(".menu-list");
const botonMenuBurguer = document.querySelector(".menu-fixed-burger");
const closeIconDivMenu = document.querySelector("#Layer_1");
const blockScreenBlackDiv = document.querySelector(".block-screen");
const li = document.querySelectorAll("#link-menu-burguer");

closeIconDivMenu.addEventListener("click", runnerBurgerMenu);
botonMenuBurguer.addEventListener("click", runnerBurgerMenu);
blockScreenBlackDiv.addEventListener("click", animationDivMenu);

for (i = 0; i < li.length; i++) {
    li[i].addEventListener("click", runnerBurgerMenu);
}


function runnerBurgerMenu() {
    divMenu.classList.toggle("inactive");
    botonMenuBurguer.classList.toggle("inactive");
    blockScreenBlackDiv.classList.toggle("inactive");
}

function animationDivMenu() {
    divMenu.style.width = "67vw";
    setTimeout(function(){
        divMenu.style.width = "70vw";
    },200);
}