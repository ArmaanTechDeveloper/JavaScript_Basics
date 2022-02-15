// sets : it cannot have duplicate values
const people = ['armaan','shubham','umang','armaan','abhishek'];
const peopleSet = new Set(people);
let uniquePeopleArray = [...peopleSet];
// console.log(uniquePeopleArray); 

// this way we can conver but we can do it another way
uniquePeopleArray = [...new Set(people)];
console.log(uniquePeopleArray);

//now we can use different methods on sets like add remove
peopleSet.add('shubham').add('kundu').add('atc');
peopleSet.delete('kundu');
console.log(peopleSet)
peopleSet.clear();
// we can use for each on a set;
console.log(peopleSet , peopleSet.size);