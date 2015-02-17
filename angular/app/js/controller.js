var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope){
	$scope.phones = [
		{'name': 'Nexus S', 'snippet': 'Fast just got faster with Nexus S.'},
		{'name': 'Huawei', 'snippet': 'Hard working!'},
		{'name': 'Motorola', 'snippet': 'The Next Generation.'}
	];
});