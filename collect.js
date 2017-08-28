var http = require('http');

http.get(process.argv[2], function(request) {
    var result = "";
    request.setEncoding("utf8");
    request.on("data", function(data) {
	result += data;
    });
    request.on("end", function() {
	console.log(result.length);
	console.log(result);
    });
});
