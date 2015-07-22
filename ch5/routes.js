var http = require("http");

http.createServer(function(req, res) {
	if (req.url === '/' && req.method === 'GET') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('Hello <strong>home page</strong>');
	} else if (req.url === '/account' && req.method === 'GET') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('Hello <strong>account page</strong>');
	} else {
		res.writeHead(404, {'Content-Type': 'text/html'});
		res.end();
	}
}).listen(1337);
console.log("Listening at localhost:1337");