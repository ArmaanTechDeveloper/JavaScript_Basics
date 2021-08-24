let strone = 'Armaan Tech Developer';
let strtwo = 'Good morning ';

console.log(strone + strtwo);
console.log(strone.length);
console.log(strone.toLowerCase());
console.log(strone.toUpperCase());

console.log(strtwo[1]);
console.log(strtwo[5]);
console.log(strone.charAt(4));

console.log(strone.indexOf('e'));
console.log(strone.lastIndexOf('e'));

console.log(strone.endsWith('Developer'));
console.log(strone.includes('tech'))

console.log(strone.substring(0,6));
console.table(strone.split(' '));
console.log(strtwo.slice(-4));

console.time('Your code took ');

let thisisjs = 'Something';
let aLineToBePrint = `<h1>This is my inner javascript working ${thisisjs} </h1>
<p>This is an another tag of it </p>
`;

document.body.innerHTML = aLineToBePrint;

console.timeEnd('Your code took ');


