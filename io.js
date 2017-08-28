var fs = require('fs');
//var buff = fs.readFileSync(process.argv[2]).toString();
fs.readFile(process.argv[2], function(err, data) {
    console.log(data.toString().split("\n").length - 1);
});

//console.log(buff.split("\n").length - 1);
