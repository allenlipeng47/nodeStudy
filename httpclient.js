var url = process.argv[2];
var http = require('http');
var options = {
	host: 'http://yoururl.com',
	port: 80,
	path: '/path/to/resource',
	method: 'get'
};

callback = function(response){

	response.setEncoding('utf8');
	
	response.on('data', function(chunk){
		console.log(chunk);
	});
	
	response.on('error', function(e){
		console.log(e.message);
		console.log('an error happened');
	});
	
	response.on('end', function(){
		
	});
}

http.request(options, callback).end();