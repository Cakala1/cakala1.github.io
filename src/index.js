import showHome from './home';
import showMenu from './menu';
import showContact from './contact';

const navList = document.querySelector(".nav-list");

navList.addEventListener("click", (e) => {
    if(e.target.id === "menu-btn"){
        e.target.parentNode.parentNode.querySelector(".active").className = "";
        e.target.parentNode.classList.add("active");
        showMenu();
    }
    else if(e.target.id === "home-btn"){
        e.target.parentNode.parentNode.querySelector(".active").className = "";
        e.target.parentNode.classList.add("active");
        showHome();
    }
    else if(e.target.id === "contact-btn"){
        e.target.parentNode.parentNode.querySelector(".active").className = "";
        e.target.parentNode.classList.add("active");
        showContact();
    }
})


document.addEventListener("DOMContentLoaded", () => {
    showHome();
})