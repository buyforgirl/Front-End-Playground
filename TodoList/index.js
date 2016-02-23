var app = angular.module('todoList', []);
app.controller('myController', function ($scope) {
	$scope.tasks = [];
	$scope.addCheckBox = function() {
		$scope.tasks.push($scope.task);
	};
});

app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});