const mainMenu = document.querySelector(".main-menu");
const ulMenu = document.querySelector(".menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");

let isOpen = false ;
hamburgerMenu.addEventListener("click" , () =>{
    if(!isOpen){
        isOpen = true ;
        hamburgerMenu.classList.add("open");
        mainMenu.classList.remove("main-menu");
        mainMenu.classList.add("main-menu-little");
        ulMenu.classList.remove("ul-menu");
        ulMenu.classList.add("ul-menu-little");
    } else {
        isOpen = false ;
        hamburgerMenu.classList.remove("open");
        mainMenu.classList.remove("main-menu-little");
        mainMenu.classList.add("main-menu");
        ulMenu.classList.remove("ul-menu-little");
        ulMenu.classList.add("ul-menu");
    }


})


