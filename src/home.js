export default function createHome() {
    const home = document.createElement("div");
    home.appendChild(navBar());
    home.appendChild(mainContent());
    return home;
}

function navBar() {
    const navBar = document.createElement("div");
    navBar.appendChild(leftNav());
    navBar.appendChild(rightNav());
    return navBar;
}

function leftNav() {
    const logo = document.createElement("h1");
    logo.classList.add("logo");
    logo.textContent = "Du Ma";
    return logo;
}

function rightNav() {
    const rightNav = document.createElement("div");
    rightNav.appendChild(navElements("HOME"));
    rightNav.appendChild(navElements("MENU"));
    rightNav.appendChild(navElements("CONTACT"));
    return rightNav;
}

function navElements(text) {
    const links = document.createElement("a");
    links.textContent = text;
    return links;
}

function mainContent() {
    const main = document.createElement("div");
    main.classList.add("main");
    main.appendChild(leftMain());
    main.appendChild(rightMain());
    return main;
}

function leftMain() {
    const leftMain = document.createElement("div");
    leftMain.classList.add("left-main");
    const greeting = document.createElement("h2");
    greeting.classList.add("greeting");
    greeting.textContent = "DU MA, HOW ARE YOU";
    leftMain.appendChild(greeting);
    return leftMain;
}

function rightMain() {
    const rightMain = document.createElement("div");
    rightMain.classList.add("right-main");
    return rightMain;
}