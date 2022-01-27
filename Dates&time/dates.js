const now = new Date();

console.log(now);
console.log(typeof now);

// days months and time 
console.log('Getyear:',now.getFullYear());
console.log('Getmonth:',now.getMonth());
console.log('GetDay',now.getDay());
console.log('GetHours:',now.getHours());
console.log('GetMinutes:',now.getMinutes());
console.log('GetSeconds:',now.getSeconds());


// some string returning methods
console.log('GetTime:',now.getTime()); // timestamp
console.log('GetDate:',now.getDate());