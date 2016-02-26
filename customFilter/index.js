/**
*  Module
*
* Description
*/
var app = angular.module('myApp', []);
app.filter('ordinal', function () {
	return function (array) {
		var newArray = [];
		array.forEach(function(input) {
			if (typeof input === 'string') {
				newArray.push(input);
			} else if (typeof input === 'number') {
				var num	= input % 10;
				switch (num) {
					case 0:
						 newArray.push(0);
						 break;
					case 1:
						newArray.push(input + 'st');
						break;
					case 2:
						newArray.push(input + 'nd');
						break;
					case 3: 
						newArray.push(input + 'rd');
						break;
					default:
						newArray.push(input + 'th');
				}
			}
		});
		return newArray;
	}
});

app.controller('myController', ['$scope','ordinalFilter', function($scope, ordinalFilter){
	$scope.array = [1, 2, 3, 4, 777, 1901, 0, 'Seven'];
	$scope.filtedArray = ordinalFilter($scope.array);
}]);