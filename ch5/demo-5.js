process.argv.forEach(function(value, index, args) {
	console.log('process.argv[' + index + '] = ' + value);
});

console.log('Currently executing file is ' + __filename);
console.log('It is located in ' + __dirname);
console.log('The current working directory is ' + process.cwd());

try {
	process.chdir("/");
} catch (error) {
	console.error("chdir: " + error.message);
}

console.log("Current working directory is now " + process.cwd());

// Read source code of current file

var fs = require("fs");

fs.readFile(__filename, {
		encoding: 'utf8'
}, function(error, data) {
	if (error) {
		return console.error(error.message);
	}
	console.log(data);
})

var data

try {
	data = fs.readFileSync(__filename, {
		encoding: 'utf8'
	});
	console.log(data);
} catch (error) {
	console.error(error.message);
}
