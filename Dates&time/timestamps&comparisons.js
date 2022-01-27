const now = new Date();
const before = new Date('January 25 2022 7:30:59');
console.log(now.getTime() , before.getTime());

let diff = now.getTime() - before.getTime();
//converting into seconds
diff = diff /1000;
// converting into minutes
diff /= 60;
// converting into hours
diff = Math.floor(diff /= 60);

console.log(`The blog was created ${diff} hours ago.`);

//converting timestamps into date objects
const timestamp = now.getTime(); // this returns a time stamp
console.log(`The timestamp is ${timestamp}`);

// converting
const date = new Date(timestamp);
console.log(date);

