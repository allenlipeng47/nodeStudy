var _ = require('lodash');

var arr = ['a', 'b', 'c', 'd', 'e', false, '', 0];
arr = _.compact(arr);

console.log(arr);