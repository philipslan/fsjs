var http = require('http');

http.createServer(function(req, res) {
	var _url;

	req.method = req.method.toUpperCase();
	console.log(req.method + " " + req.url);
	res.end('The current time is ' + Date.now())

}).listen(1337);

console.log("Server running at localhost:1337");
