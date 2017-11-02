const buyForm = document.getElementById("buyForm");
const preview_image = document.getElementById("previewImage");

const colorNames = ["white", "yellow", "green"];
const images_dir = "img/tshirts";
const product_img_name = "tshirt";

buyForm.addEventListener("click", (mouseEvent) =>
{
    if(mouseEvent.target.getAttribute("name") == "color")
    {
        preview_image.setAttribute("src", images_dir + "/" + product_img_name + "_" + colorNames[mouseEvent.target.getAttribute("value")] + ".jpg");
    }
}
);

const favoriteButton = document.getElementById("favoriteButton");

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