import PropertySelector from './property-selector.js';

const product = document.getElementById('product');
const previewImage = document.getElementById('previewImage');
const colorNames = ['white', 'yellow', 'green'];
const imagesDir = 'img/tshirts';
const productImgName = 'tshirt';
const productId = 978123;

const properties = localStorage.getItem('p' + productId);
let propertiesObject = {};
if(properties){
    propertiesObject = JSON.parse(properties);
}

new PropertySelector(document.getElementById('colorList'), product);
new PropertySelector(document.getElementById('sizeList'), product);

product.addEventListener('property-selected', event => {
    const data = event.detail;

    if (data.type === 'color') {
        remeberProductProperty('color', data.value);
        changePicture(data.value);
    }

    if (data.type === 'size') {
        remeberProductProperty('size', data.value);
        changePrice();
    }
});

function changePrice() {
    document.getElementById('value').innerHTML = +new Date();
}

function changePicture(color) {
    previewImage.setAttribute('src', imagesDir + '/' + productImgName + '_' + colorNames[color] + '.jpg');
}

function remeberProductProperty(property, value){
    propertiesObject[property] = value;
    console.log(property, value);
}

product.addEventListener('click', (mouseEvent) => {
    if (mouseEvent.target.getAttribute('id') === 'favoriteButton') {
        if (mouseEvent.target.hasAttribute('favorite')) {
            remeberProductProperty('favorite', false);
            mouseEvent.target.removeAttribute('favorite');
        }
        else {
            remeberProductProperty('favorite', true);
            mouseEvent.target.setAttribute('favorite', '');
        }
    }
}
);

function saveToLocalStorage(){
    localStorage.setItem('p' + productId, JSON.stringify(propertiesObject));
}

window.addEventListener('beforeunload', saveToLocalStorage);

if(propertiesObject.color !== undefined) {
    document.getElementById('color_' + propertiesObject.color).checked = true;
    changePicture(propertiesObject.color);
}

if(propertiesObject.size !== undefined) {
    document.getElementById('size_' + propertiesObject.size).checked = true;
}

if(propertiesObject.favorite !== undefined) {
    if(propertiesObject.favorite)
        document.getElementById('favoriteButton').setAttribute('favorite', '');
}

const support = document.getElementById('support');
const services = document.getElementById('services');
const social = document.getElementById('social');

let socialWrapped = false;
let socialWrapped2 = false;
let servicesWrapped = false;

function wrapManager() {
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

window.addEventListener('resize', wrapManager);
wrapManager();
