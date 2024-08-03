const http = require("http");
// Node js comes out of the box with the http module and no need to use npm to install it

const hostname = '127.0.0.1' // Hostname for our server to listen
const PORT = 3000; // PORT for our server to listen

const server = http.createServer((req, res)=>{
	if(req.url === '/'){
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Hello world');
	} else if(req.url === '/cofee'){
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Have a cup of cofee and get back to work');
	} else{res.statusCode = 404;
		res.setHeader('Content-Type', 'text/plain');
		res.end('404 Not Found');
	}
})

server.listen(PORT, hostname, ()=>{
	console.log(`Server listening at http://${hostname}:${PORT}`)
})
