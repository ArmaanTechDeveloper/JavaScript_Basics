const popupWrapper = document.querySelector('.popup-wrapper');
const popup = document.querySelector('.popup');
const close = document.querySelector('.popup-close');
const button = document.querySelector('.click-me');

button.addEventListener('click',()=>{
    popupWrapper.style.display = 'block';
});
close.addEventListener('click',()=>{
    popupWrapper.style.display = 'none';
});
popupWrapper.addEventListener('click',()=>{
    popupWrapper.style.display = 'none';
});
