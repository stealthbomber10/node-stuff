var http = require('http');
var urls = [];
for (var i = 2; i < 5; i++) {
    urls[i - 2] = process.argv[i];
}
function collect(url, callback) {
    var result = "";
    http.get(url, function(request) {
	request.setEncoding("utf8");
	request.on("data", function(data) {
	    result += data;
	});
	request.on("end", function() {
	    console.log(result);
	    callback();
	});
    });
};
collect(urls[0], function() {
    collect(urls[1], function() {
	collect(urls[2], function() {
	});
    });
});
//resort to callback hell
