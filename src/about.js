export default function createAbout() {
    const about = document.createElement("div");
    about.classList.add("about");
    about.appendChild(header());
    about.appendChild(createBody());
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

function createBody() {
    const aboutBody = document.createElement("div");
    aboutBody.classList.add("about-body");

    aboutBody.appendChild(aboutLeft());
    aboutBody.appendChild(aboutRight());

    return aboutBody;
}

function createContent(text, className) {
    const paragraph = document.createElement("p");
    if(className != undefined) paragraph.classList.add(className);
    paragraph.textContent = text;
    return paragraph;
}

function aboutLeft() {
    const aboutLeft = document.createElement("div");
    aboutLeft.classList.add("about-left");
    
    const aboutImg = document.createElement("div");
    aboutImg.classList.add("about-image");

    aboutLeft.appendChild(aboutImg);
    return aboutLeft;
}

function aboutRight() {
    const aboutRight = document.createElement("div");
    aboutRight.classList.add("about-right");
    aboutRight.appendChild(createContent("Soytiet - Executive Chef", "chef-title"));
    aboutRight.appendChild(createContent("Chef Soytiet came from humble beginnings. Being born in the dense jungles of Vietnam, where he spent most of his time panhandling for a few cents a day in order to feed his family of one - himself. His current position as Executive Chef at the Đụ Má Restaurant reflects his dedication to living a simple lifestyle as well as his heritage.", "chef-biography"));
    aboutRight.appendChild(createContent("Chef Soytiet attended the Culinary Institute of Vietnam in 1995 but never graduated. His inability to not randomly count everything in English was holding back his classmates and educator. At the cusp of losing everything he worked hard for, he woke up one day and went to his educator and said firmly, Đụ Má, which is how the Đụ Má Restaurant came to be. While he lacks the skills of a true French Chef, he gains the rudimentary skill of every 5 year old, and that is the art of counting in English up to 49 from 41.", "chef-biography"));
    aboutRight.appendChild(createContent("The skills he didn't gain at the Culinary Institute of Vietnam allowed him to be the Executive Chef at his own restaurant, Đụ Má, which has been going strong for the last 10 years. He creates his own recipes, which has garnered him popularity within the culinary community and TIMES Magazine named him 'Top Chef of Vietnam'.In his spare time, Chef Soytiet continues his practice of counting in English and has produced one of the hottest songs in 2000, titled '41'. He was nominated for the Grammy's - 2020 for Best Rap Performance, Best Rap Song, and won Best Music Video and Best Children's Music Album. The song has amassed over 41 but under 49 thousand views and was sampled by renowned American Rapper, Wiz Khalifa, which amassed over 5.2 million views, which is a number that Soytiet never could of imagined or comprehend.", "chef-biography"));
    return aboutRight;
}