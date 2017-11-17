import PropertySelector from './property-selector.js';

const product = document.getElementById('product');
const previewImage = document.getElementById('previewImage');
const colorNames = ['white', 'yellow', 'green'];
const imagesDir = 'img/tshirts';
const productImgName = 'tshirt';

new PropertySelector(document.getElementById('colorList'), product);
new PropertySelector(document.getElementById('sizeList'), product);

product.addEventListener('property-selected', event => {
    const data = event.detail;

    if (data.type === 'color') {
        changePicture(data.value);
    }

    if (data.type === 'size') {
        changePrice();
    }
});

function changePrice() {
    document.getElementById('value').innerHTML = +new Date();
}

function changePicture(color) {
    previewImage.setAttribute('src', imagesDir + '/' + productImgName + '_' + colorNames[color] + '.jpg');
}

product.addEventListener('click', (mouseEvent) => {
    if (mouseEvent.target.hasAttribute('favorite')) {
        mouseEvent.target.removeAttribute('favorite');
    } else {
        mouseEvent.target.setAttribute('favorite', '');
    }
}
);

const support = document.getElementById('support');
const services = document.getElementById('services');
const social = document.getElementById('social');

let socialWrapped = false;
let socialWrapped2 = false;
let servicesWrapped = false;

window.addEventListener('resize', () => {
    social.classList.remove('wrapped');

    if(support.getBoundingClientRect().top < services.getBoundingClientRect().top)
        servicesWrapped = true;
    else
        servicesWrapped = false;

    if(support.getBoundingClientRect().top < social.getBoundingClientRect().top)
        socialWrapped = true;
    else
        socialWrapped = false;

    if(services.getBoundingClientRect().top < social.getBoundingClientRect().top)
        socialWrapped2 = true;
    else
        socialWrapped2 = false;

    if(socialWrapped2 || (socialWrapped && !servicesWrapped)) {
        social.classList.add('wrapped');
    }
}
);
