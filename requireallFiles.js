var path = require('path'),
	requireAll = require('require-all'),
	_ = require('lodash');

var rootPath = path.normalize(__dirname);
var currFiles = requireAll(rootPath + '\\api\\models');
//it seems requireAll can't deal with the directory where contains json file


//console.log(currFiles);

var tmp = _(currFiles);


_(currFiles).each(function (item){
	console.log(item);
});

