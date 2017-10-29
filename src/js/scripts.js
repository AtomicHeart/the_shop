let product = document.getElementById("buyForm");
let preview_image = document.getElementById("previewImage");

const images_dir = "img/tshirts";
const product_img_name = "tshirt";


preview_image.setAttribute("src", images_dir + "/" + product_img_name + "_white.jpg");

product.addEventListener("click", (mouseEvent) =>
{
    if(mouseEvent.target.getAttribute("name") == "color")
    {
        preview_image.setAttribute("src", mouseEvent.target.getAttribute("img-path"));
    }
}
);

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
};