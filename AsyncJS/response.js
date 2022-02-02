
const getTodos = (resource)=>{
    // creating a request object
    const request = new XMLHttpRequest();
    return new Promise((resolve , reject)=>{
        request.addEventListener('readystatechange',()=>{
            if(request.readyState === 4 && request.status ===200){
               const data = JSON.parse(request.responseText);
               resolve(data);
                
            }
            else if(request.readyState === 4){
                reject('error loading the data !');
            }
        });
        
        request.open('GET',resource);
        
        request.send();
    })
    
}

// getTodos((err,data)=>{
//     console.log('callback function fired');
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// });

// console.log(3);
// console.log(4);

// chaining promises
getTodos('todos.json').then((data)=>{
    console.log('promise 1 resolved',data);
    return getTodos('todos.json');
}).then((data)=>{
    console.log('promise 2 resolved',data);
    return getTodos('todos.json');
}).then((data)=>{
    console.log('promise 3 resolved',data);
}).catch((err)=>{
    console.log('error loading resource',err);
});