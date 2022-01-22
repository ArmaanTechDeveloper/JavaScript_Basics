// call backs are function into a function kind of nested function for example

people = ['rohan' , 'harry' , 'swedish' , 'kinda'];

const logPerson = (person , index)=>{
    console.log(`Good morning ${person} - ${index}`);
}
people.forEach(logPerson); // This is a callback function we can also write it as 

console.log('\n Another way of writing is :')

// for each element of people it is gonna fire the function written inside it 
people.forEach((person , index)=>{
    console.log(`Good morning ${person} - ${index}`);
});

// simple : calling a function inside a function is call back function 




/* 
Task : log each person name into the browser
*/
const grabElement = document.getElementById('test');
let generatehtml = ``;
people.forEach((person)=>{
    generatehtml += `<p>${person}</p>`;
});
grabElement.innerHTML = generatehtml;

