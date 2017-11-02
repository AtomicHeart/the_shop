const buyForm = document.getElementById("buyForm");
const previewImage = document.getElementById("previewImage");
const colorNames = ["white", "yellow", "green"];
const imagesDir = "img/tshirts";
const productImgName = "tshirt";

buyForm.addEventListener("click", (mouseEvent) => {
    if(mouseEvent.target.getAttribute("name") === "color") {
        previewImage.setAttribute("src", imagesDir + "/" + productImgName + "_" + colorNames[mouseEvent.target.getAttribute("value")] + ".jpg");
    }
}
);

const favoriteButton = document.getElementById("favoriteButton");

favoriteButton.addEventListener("click", () => {
    if (favoriteButton.hasAttribute("favorite")) {
        favoriteButton.removeAttribute("favorite");
    } else {
        favoriteButton.setAttribute("favorite", "");
    }
}
);