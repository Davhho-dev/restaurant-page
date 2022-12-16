function navBar() {
    const navBar = document.createElement("div");
    navBar.classList.add("navbar");
    navBar.appendChild(navElement("home"));
    navBar.appendChild(navElement("menu"));
    navBar.appendChild(logo());
    navBar.appendChild(navElement("about"));
    navBar.appendChild(navElement("contact"));
    return navBar;
}

function logo() {
    const logo = document.createElement("h1");
    logo.classList.add("logo");
    logo.textContent = "DU MA";
    return logo;
}

function navElement(text) {
    const link = document.createElement("a");
    link.classList.add(text);
    link.textContent = text;
    return link;
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

export {navBar, mainContent};