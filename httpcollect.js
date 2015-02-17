var url = process.argv[2];
var http = require('http');
var options = {
	host: url,
	method: 'get'
};
var bl = require('bl');

callback = function(response){
	response.setEncoding("utf8");
	
	response.on('data', function(chunk){
		//chunk = chunk.toString();
		//console.log(chunk.length);
		//console.log(chunk);
	});
	
	response.on('error', function(e){
		console.log(e.message);
		console.log('an error happened');
	});
	
	response.pipe(bl(function(err, data){
		if(err){
			console.log(err);
		}
		else{
			data = data.toString();
			console.log(data.length);
			console.log(data);
		}
	}));
	
	response.on('end', function(){
		
	});
}

http.request(options, callback).end();


function httpGet (index) {
  http.get(process.argv[2 + index], function (request) {
    request.pipe(bl(function (err, data) {
		if (err) {
			//return console.error(err);
			console.log(err);
		}
		results[index] = data.toString();
		count++;
		if (count == 3) {
			printResults();
		}
    }))
  })
}

httpGet(0);

//for (var i = 0; i < 3; i++) {
//	httpGet(i);
//}