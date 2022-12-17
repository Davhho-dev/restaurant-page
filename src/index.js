import { navBar } from "./home";
import { mainContent } from "./home";
import menu from "./menu";
import "./style.css";

const content = document.getElementById("content");
// content.appendChild(menu());




content.appendChild(navBar());
content.appendChild(mainContent());

