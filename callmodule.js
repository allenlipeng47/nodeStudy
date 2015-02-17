var mymodule = require('./mymodule/lsfilter.js');
var dir = process.argv[2];
var filter = process.argv[3];
mymodule(dir, filter, function(err, list){
		for(var i=0;i<list.length;i++){
			console.log(list[i]);
		}
});