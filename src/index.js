import { navBar } from "./home";
import { mainContent } from "./home";
import "./style.css";

const content = document.getElementById("content");
content.appendChild(navBar());
content.appendChild(mainContent());