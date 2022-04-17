const express = require('express');
const app = express();
const PORT = 3000;
let friends = [
    {id:0,name:'albert einstein'},
    {id:1,name:'sir issac newtoon'}

]
app.use((req,res,next)=>{
  const start = Date.now();
  next();
  const delta = Date.now() -  start;
  console.log(`${req.url} registered took ${delta}ms`);

})
app.use(express.json());
app.post('/friends',(req,res)=>{
  if(!req.body.name){
    return res.status(400).json({
      err: "invalid name"
    })
  }
  const newFriend = {
    id:friends.length,
    name: req.body.name
  }
  friends.push(newFriend);
  res.send(newFriend)
})
app.get('/',(req, res)=>{
    res.send('Hello world ! this is my first express app')
});
app.get('/messages',(req,res)=>{
    res.send('Hello this is armaan here from messages route')
});
app.get('/friends',(req,res)=>{
    res.send(friends)
})
app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if (friend) {
      res.status(200).json(friend);
    } else {
      res.status(404).json({
        error: "Friend does not exist"
      });
    }
  });
app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`)
})