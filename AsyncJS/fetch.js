// fetching the data
fetch('todos.json')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log('error occured',err);
})