const product = document.getElementById('product');
const previewImage = document.getElementById('previewImage');
const colorNames = ['white', 'yellow', 'green'];
const imagesDir = 'img/tshirts';
const productImgName = 'tshirt';

product.addEventListener('click', (mouseEvent) => {
    if(mouseEvent.target.getAttribute('name') === 'color') {
        previewImage.setAttribute('src', imagesDir + '/' + productImgName + '_' + colorNames[mouseEvent.target.getAttribute('value')] + '.jpg');
    } else if (mouseEvent.target.hasAttribute('favorite')) {
        mouseEvent.target.removeAttribute('favorite');
    } else {
        mouseEvent.target.setAttribute('favorite', '');
    }
}
);
