var filter = require('./filter_mod.js');

filter(process.argv[2], process.argv[3], function(err, data) {
    for (i = 0; i < data.length; i++) {
	console.log(data[i]);
    }
});
