let grabelement = document.getElementById('LinkToCWH');
let createElement = document.createElement('h1');
createElement.innerText = 'Go to CODEWITHHARRY';
grabelement.appendChild(createElement);

let gotocwh = document.createElement('a');
gotocwh.setAttribute('href','https://www.codewithharry.com');
gotocwh.innerHTML = 'Click here'
grabelement.appendChild(gotocwh);

gotocwh.style.fontSize = '40px';
grabelement.style.display = 'flex';
grabelement.style.flexDirection = 'column';
grabelement.style.width = '100vw';
grabelement.style.justifyContent = 'center';
grabelement.style.alignItems = 'center';


