const http = require('http');

//Dealing with sockets is a very low level thing (not javascript ideal. 
//It's C++ that takes precedence for this)
// server.on('connection', (socket)=> {
//     console.log('New connection...');
// });


//create web server (WOW THIS IS HOW WEB SERVERS ARE MADE???)
//THIS SERVER IS AN EVENT EMITTER (WHADAYA KNOW?!)
const server = http.createServer((req,res)=>{
    //instead of working with socket
    //we can work with the actual request or response objects
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);//port 3000

console.log('Listening on port 3000');

