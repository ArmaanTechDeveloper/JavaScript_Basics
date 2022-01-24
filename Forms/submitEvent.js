// preventing the default reload of the browser
const form = document.querySelector('#form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(form.username.value);
})  