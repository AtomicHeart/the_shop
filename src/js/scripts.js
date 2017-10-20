var sizeStrings = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
var colorCodes = ["ffffff", "ffff00", "22aa44"];
var colorNames = ["white", "yellow", "green"];

var currentColor = -1;
var currentSize = -1;
var images_dir = "img/tshirts";

function initProduct(sizes, colors, category, product_img_prefix)
{
    var sizeList = document.getElementById("sizeList");

    for(let i = 0; i < sizes.length; i++)
    {
        let item = document.createElement('li');
        item.innerHTML = sizeStrings[sizes[i]];
        sizeList.appendChild(item);
        item.setAttribute("id", "size_" + sizes[i]);
        item.setAttribute("class", "main__product__size_list_item");
        item.setAttribute("product_size", sizes[i]);
        item.onclick = function()
        {
            if (item.hasAttribute("current"))
            {
                item.removeAttribute("current", "");
                currentSize = -1;
            }
            else
            {
                if(currentSize!=-1)
                {
                    let currentItem = document.getElementById("size_" + currentSize);
                    currentItem.removeAttribute("current");
                }
                item.setAttribute("current", "");
                currentSize = item.getAttribute("product_size");
            }
        }
    }


    var colorList = document.getElementById("colorList");

    for(let i = 0; i < colors.length; i++)
    {
        let item = document.createElement('li');
        item.setAttribute("style", "background-color: #" + colorCodes[colors[i]]);
        item.setAttribute("id", "color_" + colors[i]);
        item.setAttribute("class", "main__product__color_list_item");
        item.setAttribute("product_color", colors[i]);
        colorList.appendChild(item);
        item.onclick = function(parent = item)
        {
            if (item.hasAttribute("current"))
            {
                item.removeAttribute("current", "");
                currentColor = -1;
            }
            else
            {
                if(currentColor!=-1)
                {
                    let currentItem = document.getElementById("color_" + currentColor);
                    currentItem.removeAttribute("current");
                }
                item.setAttribute("current", "");
                currentColor = item.getAttribute("product_color");

                let preview_image = document.getElementById("preview_image");
                preview_image.setAttribute("src", images_dir + "/" + product_img_prefix + "_" + colorNames[currentColor] + ".jpg");
            }
        }
    }

    let preview_image = document.getElementById("preview_image");
    preview_image.setAttribute("src", images_dir + "/" + product_img_prefix + "_" + colorNames[colors[0]] + ".jpg");

    var breadcrumbs = document.getElementById("breadcrumbs");

    for(let i = 0; i < (category.length - 1); i++)
    {
        let item = document.createElement('a');
        item.setAttribute("class", "main__breadcrumbs_link");
        item.setAttribute("href", "localhost:30000");
        item.innerHTML = category[i];
        breadcrumbs.appendChild(item);
        breadcrumbs.innerHTML += " / ";
    }

    let item = document.createElement('a');
    item.setAttribute("class", "main__breadcrumbs_current_link");
    item.innerHTML = category[category.length - 1];
    breadcrumbs.appendChild(item);
}

var buyButton = document.getElementById("buyButton");

buyButton.onclick = function()
{
    if(currentColor==-1)
    {
        if(currentSize==-1)
        {
            alert("Вы не выбрали цвет и размер!");
        }
        else
        {
            alert("Вы не выбрали цвет!");
        }
    }
    else if(currentSize==-1)
    {
        alert("Вы не выбрали размер!");
    }
}

var favoriteButton = document.getElementById("favoriteButton");

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

initProduct([0, 2, 3, 4], [0, 1, 2], ["LISP", "Одежда", "Футболки"], "tshirt");