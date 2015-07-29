var http = require('http');
var employeeService = require('./lib/employees');

http.createServer(function(req, res) {
	var _url;

	req.method = req.method.toUpperCase();
	console.log(req.method + " " + req.url);
	if (req.method !== 'GET') {
		res.writeHead(501, {
			'Content-Type' : 'text/plain'
		});
		return res.end(req.method + ' is not implemented by this server.');
	}

	if (_url = /^\/employees$/i.exec(req.url)) {
		// return a list of employees
		// res.writeHead(200);
		// return res.end('employee list');
		employeeService.getEmployees(function (error, data) {
			if (error) {
				// send a 500 error
			}
			// send the data with a 200 status code
		});
	} else if (_url = /^\/employees\/(\d+)$/i.exec(req.url)) {
		// find the employee by the id in the route
		// res.writeHead(200);
		// return res.end('a single employee');
		employeeService.getEmployee(_url[1], function (error, data) {
			if (error) {
				// send a 500 error
			}

			if (!data) {
				// send a 404 error
			}
			// send the data with a 200 status code
		})
	} else {
		// try to send the static file
		// res.writeHead(200);
		// res.end('static file maybe');
		// if not, send a 404
	}

}).listen(1337);
console.log("Server running at localhost:1337");
