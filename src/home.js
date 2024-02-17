function createHome(){
    const container = document.createElement("div");

    const home_heading = document.createElement("h3");
    home_heading.innerText = "BigBurger - best burgers in Warsaw";

    const home_p = document.createElement("p");
    const home_quote = document.createElement("em");
    home_quote.innerHTML = '&bdquo;Crafting Burgers, Creating Memories!&rdquo;';
    home_p.classList.add("home_quote");
    home_p.appendChild(home_quote);

    const img_container = document.createElement("div");
    img_container.classList.add("home-img");
    const img = document.createElement("img");
    img.src = "./images/chef.png";
    img.alt = "Picture of main chef";
    img.classList.add("chef-img");
    img_container.appendChild(img);

    container.appendChild(home_heading);
    container.appendChild(home_p);
    container.appendChild(img_container);

    return container;
}


export default function showHome(){
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.append(createHome());
}