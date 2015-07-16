var util = require("util");
var EventEmitter = require('events').EventEmitter;

function Counter() {
	var self = this;

	EventEmitter.call(this);
	var count = 0;

	this.start = function() {
		this.emit('start');
		setInterval(function() {
			self.emit('count', count);
			++count;
		}, 1000);
	};
}

util.inherits(Counter, EventEmitter);

var counter = new Counter();

counter.on('start', function() {
	console.log('start event');
})

counter.on('count', function(count) {
	console.log('count = ' + count);
})

counter.start();
