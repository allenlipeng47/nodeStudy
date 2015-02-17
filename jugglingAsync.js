var http = require('http');
var bl = require('bl');
var results = [], count = 0;

function printResults () {
	for (var i = 0; i < 3; i++) {
		console.log(results[i]);
	}
}

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