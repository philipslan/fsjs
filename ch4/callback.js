var fs = require('fs');

fs.readFile('notes.md', 'utf8', function(error, data){
	if (error) {
		return console.error(error);
	}
	console.log(data);
});
