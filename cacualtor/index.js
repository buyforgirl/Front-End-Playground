var app = angular.module('myCalcualtor', []);
app.controller('calcualtor', function ($scope) {
	$scope.result = ''; 
	$scope.operators = '+-*/';
	$scope.enterEqual = false;
	$scope.plusmn = false;
	$scope.add = function(value) {
		if ($scope.enterEqual) {
			$scope.result = '';
			$scope.enterEqual = false;
		}
		if (value === '=') {
			$scope.result = eval($scope.result);
			$scope.enterEqual = true;
		} else if (value === '#') {
			$scope.result = '';
		} else if (value === '!' && !$scope.plusmn) {
			var index = $scope.result.length - 1;
			while (index >= 0) {
				if ($scope.operators.indexOf($scope.result.charAt(index)) === -1) {
					index--;	
				} else {
					break;
				}
			}
			$scope.result = $scope.result.slice(0, index + 1) + '-' +
							$scope.result.slice(index + 1);
			$scope.plusmn = true;
		} else if (value === '!' && $scope.plusmn) {
			var lastIndex = $scope.result.lastIndexOf('-');
			$scope.result = $scope.result.slice(0, lastIndex) + $scope.result.slice(lastIndex + 1);
			$scope.plusmn = false;
		} else {
			$scope.result += value;
		}
	}
});