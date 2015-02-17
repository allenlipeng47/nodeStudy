var fileName = process.argv[2];
var fs = require('fs');
var buf = fs.readFileSync(fileName);
var bufArr = buf.toString().split('\n');
console.log(bufArr.length-1);

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1