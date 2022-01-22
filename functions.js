// declation of a function
// This function can be defined any where in the file and used anywhere
function greet(){
    console.log('Good morning');
}
// call it using 
greet();

// writing a function expresssion
// This function will only work after defining it 
const speak = function(){
    console.log('Hey there !')
}; // we use a semicolon to define it 

// call it using 
speak();


// Arguments and parameteres

const say = function(time = 'morning' , name = 'Anonymous') // These are the default values
{
    console.log(`Good ${time} ${name}`);
};
say();
say('night','shaun');
say('evening');

console.log('Returning values');
// returning values
const calcArea = function(radius){
    return 3.14 * radius **2;
}
let area = calcArea(10);
console.log('The area is ',area);
