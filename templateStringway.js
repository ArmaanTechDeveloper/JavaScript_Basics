let title = 'Atomic habits';
let author = 'neymar';
let likes = 300;

//This type is used to output the html with tags
let templateStringway = `The book ${title} by ${author} has ${likes} likes`;
console.log(templateStringway);

// This way the html is written in a dynamic way
let html = `
    <h1>The book ${title}</h1>
    <p>Written by ${author}</p>
    <span>has ${likes} likes</span>
`;

console.log(html);
// document.getElementById('LinkToCWH').innerHTML = html;
// document.getElementById('LinkToCWH').innerText = html;