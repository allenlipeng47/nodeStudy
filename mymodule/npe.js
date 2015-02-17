/*
Given a number n, find the smallest number that has same set of digits as n and is greater than n. If x is the greatest possible number with its set of digits, then print “not possible”.
The input num is a char array type.
*/
function npe(num){
	num = num.split('');
	if(num.length==1){
		return 'not possible';
	}
	var smallPos = num.length - 2;
	while(smallPos >=0 && num[smallPos] >= num[smallPos+1]){
		smallPos--;
	}
	if(smallPos < 0){
		return 'not possible';
	}
	var largePos = num.length - 1;
	while(num[largePos] <= num[smallPos]){
		largePos--;
	}
	var tmp = num[smallPos];
	num[smallPos] = num[largePos];
	num[largePos] = tmp;
	for(largePos = num.length - 1, ++smallPos; smallPos < largePos; smallPos++, largePos--){
		var tmp = num[smallPos];
		num[smallPos] = num[largePos];
		num[largePos] = tmp;
	}
	num = num.join('');
	return num;
}

module.exports = npe;