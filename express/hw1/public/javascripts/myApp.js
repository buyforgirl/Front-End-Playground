var module = angular.module("myApp", ['ngRoute']);
    module.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'template/matrix.html',
                    controller: 'myCtrl'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);

    module.controller("myCtrl", function($scope, $http) {
		$scope.submit = function() {
			$http.get('/matrix/'+$scope.matrixNum)
			     .then(function(response) {
			     	$scope.result = response.data;
			     	$scope.matrix = $scope.result['matrix'];
			     });
		}
    })