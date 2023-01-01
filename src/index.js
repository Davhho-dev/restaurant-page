import { navBar } from "./home";
import { mainContent } from "./home";
import menu from "./menu";
import about from "./about";
import contact from "./contact";

const content = document.getElementById("content");
content.appendChild(navBar());
content.appendChild(mainContent());

const links = document.querySelectorAll("li");
links.forEach((link) => {
    link.addEventListener("click", (e) => {
        if(e.target.textContent === "home") {
            content.removeChild(content.childNodes[1]);
            content.appendChild(mainContent());
        }
        else if(e.target.textContent === "menu") {
            content.removeChild(content.childNodes[1]);
            content.appendChild(menu());
        }else if(e.target.textContent === "about") {
            content.removeChild(content.childNodes[1]);
            content.appendChild(about());
        }else {
            content.removeChild(content.childNodes[1]);
            content.appendChild(contact());
        }
    })
})