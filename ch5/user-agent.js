var http = require('http');
http.createServer(function (req, res) {
	res.end('Your user agent is ' + req.headers['user-agent']);
	}).listen(1337);
console.log('server running at localhost:1337');
