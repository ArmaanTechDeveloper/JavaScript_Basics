const htwo = document.querySelector('.title');
console.log(htwo.nextElementSibling.parentElement.children); // returns and html collection

//to convert this into and array
Array.from(htwo.nextElementSibling.parentElement.children).forEach((child)=>{
    child.classList.add('addition-completed');
})

// to get the parent container use 
console.log(htwo.parentElement);
const div = htwo.parentElement;

// to get the child container use 
console.log(div.children); // gives all the children