var app = angular.module('todoList', []);

app.controller('myController', function ($scope) {
	$scope.tasks = [];
	$scope.add = function() {
        if (event.keyCode == 13 && $scope.task !== '') {
            $scope.tasks.push({text:$scope.task, finish:false});
            $scope.task = '';
        } 
	}
    $scope.finishAll = function() {
            $scope.tasks.forEach(function(obj) {
                obj.finish = true;
            });
    }
    $scope.remain = function() {
        var remainArray = $scope.tasks.filter(function(obj){
            return obj.finish == false;
        });
        return remainArray.length;
    }
    $scope.clearAll = function() {
        $scope.tasks.forEach(function(obj) {
            obj.finish = false;
        });
    }
});

