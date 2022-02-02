/* What is asynchronus JavaScript ?
--> Start now finish later on 
--> It does not block the further code to execute

What is synchronus JavaScript ?
--> Start now Finish now
--> It blocks the further code to execute
*/

console.log(1);
console.log(2);


//This is an asynchronus function
setTimeout(() => {
    console.log('callback fired !!');
}, 2000);

console.log(3);
console.log(4);