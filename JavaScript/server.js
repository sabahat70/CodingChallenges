const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=> {
	res.end("Hello from Sophia and Hashir!")
});
server.listen(8000, '127.0.0.1',()=>{});