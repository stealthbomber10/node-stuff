var url = require('url');
var http = require('http');

var server = http.createServer(function(req, res) {
    var data = url.parse(req.url, true),
	json;

    switch(data.pathname) {
    case "/api/parsetime":
	var date = new Date(data.query.iso);
	json = {
	    hour: date.getHours(),
	    minute: date.getMinutes(),
	    second: date.getSeconds()
	};
	break;
    case "/api/unixtime":
	json = {
	    unixtime: (new Date(data.query.iso)).getTime()
	};
	break;
    }
    if (json) {
	res.writeHead(200, { "Content-Type": "application/json" });
	res.end(JSON.stringify(json));
    }
    else {
	res.writeHead(404);
	res.end();
    }
});
server.listen(process.argv[2]);
