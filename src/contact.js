export default function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");
    contact.appendChild(createAddress());
    contact.appendChild(createReservation());
    contact.appendChild(createHours());
    return contact;
}

function createAddress() {
    const address = document.createElement("div");
    address.classList.add("address");
    address.appendChild(createHeader("Address:"));
    address.appendChild(createContent("Restaurant"));
    address.appendChild(createContent("555 Du Ma Ave, Du Ma, Vietnam"));
    return address;
}

function createReservation() {
    const reservation = document.createElement("div");
    reservation.classList.add("reservation");
    reservation.appendChild(createHeader("Reservation:"));
    reservation.appendChild(createContent("000-111-222"));
    reservation.appendChild(createContent("DuMaRestaurant@soytiet.com"));
    return reservation;
}

function createHours() {
    const hours = document.createElement("div");
    hours.classList.add("hours");
    hours.appendChild(createHeader("Open Hours:"));
    hours.appendChild(createContent("Monday - Friday: 5 PM - 6 PM"));
    hours.appendChild(createContent("Saturday - Sunday: 5 PM - 7 PM"));
    return hours;
}

function createHeader(text) {
    const contactHeader = document.createElement("h3");
    contactHeader.classList.add("contact-header");
    contactHeader.textContent = text;
    return contactHeader;
}

function createContent(text) {
    const contactContent = document.createElement("p");
    contactContent.classList.add("contact-content");
    contactContent.textContent = text;
    return contactContent;
}