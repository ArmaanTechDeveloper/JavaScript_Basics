const getTodos = async ()=>{
    const response = await fetch('tdos.json');

    if(response.status !== 200){
        throw new Error('Cannot fetch data link incorrect ');
    }
    const data = await response.json();
    return data;
}
//as this returns a promise we cannot use data as into a variable 

getTodos()
    .then((data)=>{console.log(data);})
    .catch((err)=>{console.log(err.message);});
    