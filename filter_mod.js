var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
    fs.readdir(dir, function(err, data) {
	if (err) {
	    callback(err, null);
	}
	else {
	    result = [];
	    data.forEach(function(file) {
		if (path.extname(file) == ("." + ext)) {
		    result.push(file);
		}
	    });
	    callback(null, result);
	}
    });
};
