const http = require('http')
const PORT = 3000;
let friends = [
    {id:0,name:'Sir Issac Newton'},
    {id:1,name:'ryan dahl'},
    {id: 2,name: 'Albert Einstein'}
]
// 'Content-Type': 'text/plain'
const server = http.createServer();

server.on('request',(req,res)=>{
    let items = req.url.split('/');
    if(items[1]==='friends'){
        if(req.method === 'POST' && items[1]==='friends'){
            req.on('data', (data) => {
                const friend = data.toString();
                console.log('Request:', friend);
                friends.push(JSON.parse(friend));
            })
        }
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 200;        
        if(req.method === 'GET' && items.length === 3){
            let friendsIndex = items[2];
            res.end(JSON.stringify(friends[friendsIndex]))
        }
        else{
            res.end(JSON.stringify(friends))
        }
        
    }  
    else if(req.method === 'GET' && items[1] === 'messages'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello Isaac!</li>');
        res.write('<li>What are your thoughts on astronomy?</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
    else{
        res.statusCode = 404;
        res.end()
    }
})

server.listen(PORT,()=>{
    console.log(`Listeining to the port ${PORT}`)
})