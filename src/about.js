export default function createAbout() {
    const about = document.createElement("div");
    about.classList.add("about");
    about.appendChild(header());
    return about;
}

function header() {
    const container = document.createElement("div");
    container.classList.add("about-container");

    container.appendChild(createContent("Đụ má", "about-header"));
    container.appendChild(createContent("Definition: an expression or gesture of greeting - used to express a greeting to a close friend or family member"));
    container.appendChild(createContent("Đụ má mày, mày khỏe không. Tao mượn 10 đồng được không?", "about-content"));

    return container;
}

function createContent(text, className) {
    const paragraph = document.createElement("p");
    paragraph.classList.add(className);
    paragraph.textContent = text;
    return paragraph;
}
