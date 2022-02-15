// rest parameter
// if we have to pass values of which we dont know how many values are there

const double = (...nums)=>{
    // makes an array of nums 

    return nums.map (nums => nums*2);
}
const arr = double(1,2,3,6,5,4,7,8,9,10,12,13,14);
// console.log(arr); 


// spreads : one to many like spread something
const people = ['armaan','harry','abhishek'];
// this is used in creating a new array which inherits the properties of previous array
const community = ['shubham','umang',...people];
// people array also gets included in community


//spreads on objects
// used for cloning the full object not just cloning the pointer of the object
const blog = {title:'This is india',author:'ArmaantechDeveloper',age:30};
const blogClone = {...blog,languages:'hindi english'}; // this clones the full object
