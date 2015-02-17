var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar', name: 'lipeng' }, 'this is the kez');
console.log(token);

var decoded = jwt.verify(token, 'this is the kez', inValidProcess);
function inValidProcess(err, decoded){
	if(err){
		console.log("token invalid: " + err);
	}
	else{
		console.log(decoded);
	}
}