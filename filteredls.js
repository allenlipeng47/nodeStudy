var dir = process.argv[2];
var filter = '.' + process.argv[3];
var fs = require('fs');
fs.readdir( dir, function(err, list){
			if(err){
				console.log(err);
			}
			else{
				for(var i=0; i < list.length; i++){
					if(list[i].indexOf(filter) >= 0){
						console.log(list[i]);
					}
				}
			}
		});