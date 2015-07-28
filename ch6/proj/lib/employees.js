var emloyeeDb = require('../database/employees');

exports.getEmployees = getEmployees;
exports.getEmployee = getEmployee;

Array.prototype.find = function (predicate) {
  for (var i = 0, value; i < this.length; i++) {
    value = this[i];
    if (predicate.call(this, value))
      return value;
  }
  return undefined;
}

function getEmployees (callback) {
	setTimeout(function () {
		callback(null, employeeDb);
	}, 500);
}

function getEmployee (employeeId, callback) {
	getEmployees(function (error, data) {
		if (error) {
			return callback(error);
		}

		var result = data.find(function(item) {
			return item.id === employeeId;
		});

		callback(null, result);
	});
}

