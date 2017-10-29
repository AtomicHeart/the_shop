const sizeStrings = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
const colorCodes = ["ffffff", "ffff00", "22aa44"];
const colorNames = ["white", "yellow", "green"];
const currencySigns = ["₽", "$", "€"];

let currentColor = -1;
let currentSize = -1;
const images_dir = "img/tshirts";

function initProduct(sizes, colors, category, product_img_prefix, name, composition, production, value, currency)
{
    let product_name = document.getElementById("name");
    product_name.innerHTML = name;

    let product_composition = document.getElementById("composition");
    product_composition.innerHTML = composition;

    let product_production = document.getElementById("production");
    product_production.innerHTML = production;

    let product_value = document.getElementById("value");
    product_value.innerHTML = value;

    let product_currency = document.getElementById("currency");
    product_currency.innerHTML = currencySigns[currency];

    let sizeList = document.getElementById("sizeList");

    for(let i = 0; i < sizes.length; i++)
    {
        let item = document.createElement('li');
        item.innerHTML = sizeStrings[sizes[i]];
        sizeList.appendChild(item);
        item.setAttribute("id", "size_" + sizes[i]);
        item.setAttribute("class", "size__list__item");
        item.setAttribute("product_size", sizes[i]);
        item.onclick = function()
        {
            if (item.hasAttribute("current"))
            {
                item.removeAttribute("current");
                currentSize = -1;
            }
            else
            {
                if(currentSize != -1)
                {
                    let currentItem = document.getElementById("size_" + currentSize);
                    currentItem.removeAttribute("current");
                }
                item.setAttribute("current", "");
                currentSize = parseInt(item.getAttribute("product_size"), 10);
            }
        }
    }


    let colorList = document.getElementById("colorList");

    for(let i = 0; i < colors.length; i++)
    {
        let item = document.createElement('li');
        item.setAttribute("style", "background-color: #" + colorCodes[colors[i]]);
        item.setAttribute("id", "color_" + colors[i]);
        item.setAttribute("class", "color__list__item");
        item.setAttribute("product_color", colors[i]);
        colorList.appendChild(item);
        item.onclick = function()
        {
            if (item.hasAttribute("current"))
            {
                item.removeAttribute("current");
                currentColor = -1;
            }
            else
            {
                if(currentColor != -1)
                {
                    let currentItem = document.getElementById("color_" + currentColor);
                    currentItem.removeAttribute("current");
                }
                item.setAttribute("current", "");
                currentColor = parseInt(item.getAttribute("product_color"), 10);

                let preview_image = document.getElementById("previewImage");
                preview_image.setAttribute("src", images_dir + "/" + product_img_prefix + "_" + colorNames[currentColor] + ".jpg");
            }
        }
    }

    let preview_image = document.getElementById("previewImage");
    preview_image.setAttribute("src", images_dir + "/" + product_img_prefix + "_" + colorNames[colors[0]] + ".jpg");

    let breadcrumbs = document.getElementById("breadcrumbs");

    for(let i = 0; i < (category.length - 1); i++)
    {
        let item = document.createElement('a');
        item.setAttribute("class", "breadcrumbs__link");
        item.setAttribute("href", "/");
        item.innerHTML = category[i];
        breadcrumbs.appendChild(item);
        breadcrumbs.innerHTML += " / ";
    }

    let item = document.createElement('a');
    item.setAttribute("class", "breadcrumbs__link current");
    item.innerHTML = category[category.length - 1];
    breadcrumbs.appendChild(item);
}

let buyButton = document.getElementById("buyButton");

buyButton.onclick = function()
{
    if(currentColor == -1)
    {
        if(currentSize == -1)
        {
            alert("Вы не выбрали цвет и размер!");
        }
        else
        {
            alert("Вы не выбрали цвет!");
        }
    }
    else if(currentSize == -1)
    {
        alert("Вы не выбрали размер!");
    }
}

let favoriteButton = document.getElementById("favoriteButton");

favoriteButton.onclick = function()
{
    if(favoriteButton.hasAttribute("favorite"))
    {
        favoriteButton.removeAttribute("favorite");
    }
    else
    {
        favoriteButton.setAttribute("favorite", "");
    }
}

initProduct(
    [0, 2, 3, 4],
    [0, 1, 2],
    ["LISP", "Одежда", "Футболки"],
    "tshirt",
    "Футболка Alien techology",
    "Состав: 100% хлопок, динамическая типизация, польстая нотация",
    "Производство: Россия",
    1500,
    0
);
