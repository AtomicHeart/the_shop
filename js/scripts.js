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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wZXJ0eVNlbGVjdG9yIGZyb20gJy4vcHJvcGVydHktc2VsZWN0b3IuanMnO1xuXG5jb25zdCBwcm9kdWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QnKTtcbmNvbnN0IHByZXZpZXdJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3SW1hZ2UnKTtcbmNvbnN0IGNvbG9yTmFtZXMgPSBbJ3doaXRlJywgJ3llbGxvdycsICdncmVlbiddO1xuY29uc3QgaW1hZ2VzRGlyID0gJ2ltZy90c2hpcnRzJztcbmNvbnN0IHByb2R1Y3RJbWdOYW1lID0gJ3RzaGlydCc7XG5jb25zdCBwcm9kdWN0SWQgPSA5NzgxMjM7XG5cbmNvbnN0IHByb3BlcnRpZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncCcgKyBwcm9kdWN0SWQpO1xubGV0IHByb3BlcnRpZXNPYmplY3QgPSB7fTtcbmlmKHByb3BlcnRpZXMpe1xuICAgIHByb3BlcnRpZXNPYmplY3QgPSBKU09OLnBhcnNlKHByb3BlcnRpZXMpO1xufVxuXG5uZXcgUHJvcGVydHlTZWxlY3Rvcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3JMaXN0JyksIHByb2R1Y3QpO1xubmV3IFByb3BlcnR5U2VsZWN0b3IoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemVMaXN0JyksIHByb2R1Y3QpO1xuXG5wcm9kdWN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb3BlcnR5LXNlbGVjdGVkJywgZXZlbnQgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBldmVudC5kZXRhaWw7XG5cbiAgICBpZiAoZGF0YS50eXBlID09PSAnY29sb3InKSB7XG4gICAgICAgIHJlbWViZXJQcm9kdWN0UHJvcGVydHkoJ2NvbG9yJywgZGF0YS52YWx1ZSk7XG4gICAgICAgIGNoYW5nZVBpY3R1cmUoZGF0YS52YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ3NpemUnKSB7XG4gICAgICAgIHJlbWViZXJQcm9kdWN0UHJvcGVydHkoJ3NpemUnLCBkYXRhLnZhbHVlKTtcbiAgICAgICAgY2hhbmdlUHJpY2UoKTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gY2hhbmdlUHJpY2UoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZhbHVlJykuaW5uZXJIVE1MID0gK25ldyBEYXRlKCk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVBpY3R1cmUoY29sb3IpIHtcbiAgICBwcmV2aWV3SW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBpbWFnZXNEaXIgKyAnLycgKyBwcm9kdWN0SW1nTmFtZSArICdfJyArIGNvbG9yTmFtZXNbY29sb3JdICsgJy5qcGcnKTtcbn1cblxuZnVuY3Rpb24gcmVtZWJlclByb2R1Y3RQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpe1xuICAgIHByb3BlcnRpZXNPYmplY3RbcHJvcGVydHldID0gdmFsdWU7XG4gICAgY29uc29sZS5sb2cocHJvcGVydHksIHZhbHVlKTtcbn1cblxucHJvZHVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChtb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKG1vdXNlRXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ2Zhdm9yaXRlQnV0dG9uJykge1xuICAgICAgICBpZiAobW91c2VFdmVudC50YXJnZXQuaGFzQXR0cmlidXRlKCdmYXZvcml0ZScpKSB7XG4gICAgICAgICAgICByZW1lYmVyUHJvZHVjdFByb3BlcnR5KCdmYXZvcml0ZScsIGZhbHNlKTtcbiAgICAgICAgICAgIG1vdXNlRXZlbnQudGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZSgnZmF2b3JpdGUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlbWViZXJQcm9kdWN0UHJvcGVydHkoJ2Zhdm9yaXRlJywgdHJ1ZSk7XG4gICAgICAgICAgICBtb3VzZUV2ZW50LnRhcmdldC5zZXRBdHRyaWJ1dGUoJ2Zhdm9yaXRlJywgJycpO1xuICAgICAgICB9XG4gICAgfVxufVxuKTtcblxuZnVuY3Rpb24gc2F2ZVRvTG9jYWxTdG9yYWdlKCl7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3AnICsgcHJvZHVjdElkLCBKU09OLnN0cmluZ2lmeShwcm9wZXJ0aWVzT2JqZWN0KSk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBzYXZlVG9Mb2NhbFN0b3JhZ2UpO1xuXG5pZihwcm9wZXJ0aWVzT2JqZWN0LmNvbG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3JfJyArIHByb3BlcnRpZXNPYmplY3QuY29sb3IpLmNoZWNrZWQgPSB0cnVlO1xuICAgIGNoYW5nZVBpY3R1cmUocHJvcGVydGllc09iamVjdC5jb2xvcik7XG59XG5cbmlmKHByb3BlcnRpZXNPYmplY3Quc2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpemVfJyArIHByb3BlcnRpZXNPYmplY3Quc2l6ZSkuY2hlY2tlZCA9IHRydWU7XG59XG5cbmlmKHByb3BlcnRpZXNPYmplY3QuZmF2b3JpdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmKHByb3BlcnRpZXNPYmplY3QuZmF2b3JpdGUpXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYXZvcml0ZUJ1dHRvbicpLnNldEF0dHJpYnV0ZSgnZmF2b3JpdGUnLCAnJyk7XG59XG5cbmNvbnN0IHN1cHBvcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VwcG9ydCcpO1xuY29uc3Qgc2VydmljZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VydmljZXMnKTtcbmNvbnN0IHNvY2lhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb2NpYWwnKTtcblxubGV0IHNvY2lhbFdyYXBwZWQgPSBmYWxzZTtcbmxldCBzb2NpYWxXcmFwcGVkMiA9IGZhbHNlO1xubGV0IHNlcnZpY2VzV3JhcHBlZCA9IGZhbHNlO1xuXG5mdW5jdGlvbiB3cmFwTWFuYWdlcigpIHtcbiAgICBzb2NpYWwuY2xhc3NMaXN0LnJlbW92ZSgnd3JhcHBlZCcpO1xuXG4gICAgaWYoc3VwcG9ydC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPCBzZXJ2aWNlcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApXG4gICAgICAgIHNlcnZpY2VzV3JhcHBlZCA9IHRydWU7XG4gICAgZWxzZVxuICAgICAgICBzZXJ2aWNlc1dyYXBwZWQgPSBmYWxzZTtcblxuICAgIGlmKHN1cHBvcnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDwgc29jaWFsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcClcbiAgICAgICAgc29jaWFsV3JhcHBlZCA9IHRydWU7XG4gICAgZWxzZVxuICAgICAgICBzb2NpYWxXcmFwcGVkID0gZmFsc2U7XG5cbiAgICBpZihzZXJ2aWNlcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPCBzb2NpYWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKVxuICAgICAgICBzb2NpYWxXcmFwcGVkMiA9IHRydWU7XG4gICAgZWxzZVxuICAgICAgICBzb2NpYWxXcmFwcGVkMiA9IGZhbHNlO1xuXG4gICAgaWYoc29jaWFsV3JhcHBlZDIgfHwgKHNvY2lhbFdyYXBwZWQgJiYgIXNlcnZpY2VzV3JhcHBlZCkpIHtcbiAgICAgICAgc29jaWFsLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZWQnKTtcbiAgICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB3cmFwTWFuYWdlcik7XG53cmFwTWFuYWdlcigpO1xuIl0sImZpbGUiOiJzY3JpcHRzLmpzIn0=
