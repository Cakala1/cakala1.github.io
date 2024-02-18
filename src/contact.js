function createContact(){
    const container = document.createElement("div");
    container.classList.add("contact");
    
    const contact_phone = document.createElement("p");
    const contact_phone_a = document.createElement("a");
    const contact_phone_icon = document.createElement("img");
    contact_phone_icon.src = "./images/phone.svg";
    contact_phone_icon.alt = "Phone Icon";
    const contact_phone_span = document.createElement("span");
    contact_phone_span.innerText = "999 999 999";
    contact_phone_a.appendChild(contact_phone_icon);
    contact_phone_a.appendChild(contact_phone_span);
    contact_phone.appendChild(contact_phone_a);

    const contact_location = document.createElement("p");
    const contact_location_img = document.createElement("img");
    contact_location_img.src = "./images/location.svg";
    contact_location_img.alt = "Location pin";
    const contact_location_span = document.createElement("span");
    contact_location_span.innerText = "Ul. Stawki 48, 00-178 Warsaw, Poland";
    contact_location.appendChild(contact_location_img);
    contact_location.appendChild(contact_location_span);

    const map_container = document.createElement("div");
    map_container.classList.add("map-container");
    const map = document.createElement("iframe");
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2126.4040608259997!2d20.979549097058086!3d52.25070912686142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb86937a36df%3A0xecd3a99b8b5dae16!2sStawki%2048%2C%2001-040%20Warszawa!5e0!3m2!1spl!2spl!4v1708211261099!5m2!1spl!2spl";
    map.style = "border: 0;"
    map.allowFullscreen= "";
    map.loading = "lazy";
    map.referrerPolicy = "no-referrer-when-downgrade";
    map_container.appendChild(map);

    container.appendChild(contact_phone);
    container.appendChild(contact_location);
    container.appendChild(map_container);

    return container;
}


export default function showContact(){
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.append(createContact());
}