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
    logo.textContent = "Đụ má";
    return logo;
}

function navElement(text) {
    const link = document.createElement("a");
    link.classList.add("nav-tabs");
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
    const greeting = document.createElement("div");
    greeting.classList.add("greeting-container");
    leftMain.classList.add("left-main");

    const greetTitle = document.createElement("h2");
    greetTitle.classList.add("greet-title");
    greetTitle.textContent = "Ối trời ơi";

    const greetContent = document.createElement("p");
    greetContent.classList.add("greet-content");
    greetContent.textContent = "Đụ Má is a Vietnamese restaurant located in the middle of nowhere";

    greeting.appendChild(greetTitle);
    greeting.appendChild(greetContent);

    leftMain.appendChild(greeting);
    leftMain.appendChild(createTopLogo());
    return leftMain;
}

function createTopLogo() {
    const frontLogo = document.createElement("div");
    frontLogo.classList.add("front-logo");

    const topLogo = document.createElement("p");
    const bottomLogo = document.createElement("p");
    topLogo.classList.add("top-logo");
    bottomLogo.classList.add("bottom-logo");
    topLogo.textContent = "Đ ụ m á";
    bottomLogo.textContent = "RESTAURANT";

    frontLogo.appendChild(topLogo);
    frontLogo.appendChild(bottomLogo);
    return frontLogo;
}

function rightMain() {
    const rightMain = document.createElement("div");
    rightMain.classList.add("right-main");
    return rightMain;
}

export {navBar, mainContent};