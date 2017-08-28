var net = require('net');

function pad(num) {
    if (num < 10) return "0" + num;
    else return num;
};
function date() {
    var date = new Date(),
	year = date.getFullYear(),
	month = date.getMonth()+1,
	day = date.getDate(),
	hours = date.getHours(),
	minutes = date.getMinutes();

    return year + "-" + pad(month) + "-" + pad(day)
	+ " " + pad(hours) + ":" + pad(minutes);
};
var server = net.createServer(function(socket) {
    socket.end(date() + "\n");
});
server.listen(process.argv[2]);
