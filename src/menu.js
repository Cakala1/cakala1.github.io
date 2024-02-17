const menu = [
    {name: "BIG Burger", img: "menu-burger.svg", price: "11.99"},
    {name: "Hot wings", img: "menu-wings.svg", price: "6.99"},
    {name: "Cripsy Fries", img: "menu-fries.svg", price: "4.99"},
    {name: "BIG Combo", img: "menu-combo.svg", price: "13.50"},
    {name: "BIG Shake", img: "menu-shake.svg", price: "5.99"},
    {name: "Coke", img: "menu-coke.svg", price: "1.99"},
    {name: "Steak", img: "menu-steak.svg", price: "15.99"}
]

function createMenu(){
    const container = document.createElement("div");

    const menu_list = document.createElement("ul");
    menu_list.classList.add("menu");

    for(const item of menu){
        const menu_item = createMenuItem(item);
        menu_list.appendChild(menu_item);
    }

    container.appendChild(menu_list);
    return container;
}

function createMenuItem({name, img, price}){
    console.log(name, img, price)
    const menu_item = document.createElement("li");
    const item_img = document.createElement("img");
    item_img.src = `./images/menu/${img}`;
    item_img.alt = name;

    const item_name = document.createElement("h4");
    item_name.innerText = name;

    const item_price = document.createElement("p");
    item_price.innerText = `$${price}`;

    menu_item.appendChild(item_img);
    menu_item.appendChild(item_name);
    menu_item.appendChild(item_price);

    return menu_item;
}


export default function showMenu(){
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.append(createMenu());
}