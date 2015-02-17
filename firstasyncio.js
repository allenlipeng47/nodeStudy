var fileName = process.argv[2];
var fs = require('fs');
fs.readFile(fileName, 'utf8',function (err, data){
			if(err){
				console.log(err);
			}
			else{
				var lines = data.split('\n').length - 1;
				console.log(lines);
			}
		});