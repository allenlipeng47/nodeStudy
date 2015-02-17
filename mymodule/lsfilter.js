function ls(dir, filter, callback){
	var fs = require('fs');
	var path = require('path');
	fs.readdir(dir, function(err, content){
		if(err){
			return callback(err);
		}
		else{
			var result = [];
			for(var i=0;i<content.length; i++){
				if(content[i].indexOf('.' + filter)>=0){
					result.push(content[i]);
				}
			}
			return callback(null, result);
		}		
	});
	
};

module.exports = ls;

/*
Another option for filter:
list = list.filter(function (file) {
  return path.extname(file) === '.' + filterStr
})
*/
