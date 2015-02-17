var express = require('express')
var app = express();

app.get('/nge/:id', function (req, res){
	var npe = require('./mymodule/npe.js');
	var result = npe(req.params.id);
	res.send(result);
})

app.get('*', function (req, res){
	res.send('Welcome to Li Peng\'s node.js!');
})

var server = app.listen(3000, function(){
	var host = server.address().address
	var port = server.address().port
});