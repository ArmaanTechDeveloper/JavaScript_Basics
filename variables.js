// Ways of declaring 
// const let and var 
// mostly used let and var 


var india = 'india';
console.log(india);

let country = 'America';
console.log(country);

const cannotChange = [20,12,05,65,23]
cannotChange.push(89); // <--- This is allowed
console.table(cannotChange);
// cannotChange = [10,20,33]   // <-- This is not allowed

let city = 'ComeOnDude';

{
    var india ;  // <-- refers to the same variable
    let city = 'doing Programming';
    console.log(city);
    india = 36;
    console.log(india);
}
console.log(india); // <-- prints 36 because changed in the object 
console.log(city);

