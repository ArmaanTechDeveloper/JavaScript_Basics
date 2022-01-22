// let  myObj = {
//     name: 'armaan',
//     school: 'Sasta bhikari school',
//     class: 12,
// }
// console.log(myObj.name);
// console.log(myObj.school);
// console.log(myObj.class);

// object literals 
const user = {
    name : 'armaan',
    email : 'techindustry245@gmail.com',
    age: 20,
    location: 'berlin',
    blogs: [
        {title: 'why so silly?' , likes: 40},
        {title:'Get well soon',likes: 70}
],
    login: function(){
        console.log('User logged in !');
    },
    logout: function(){console.log('User logged out !')},

    //The above login and logout function can also be written as like this 
    logBlogs(){
        this.blogs.forEach(blog =>{
            console.log(blog.title , blog.likes);
        })
    }
}
console.log(user.name);
console.log(user['name']);
// This is useful when
const naam = 'name';
console.log(user[naam]);
console.log(user.login());
console.log(user.logBlogs());