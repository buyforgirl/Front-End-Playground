angular.module('myApp')
.controller('editCtrl', function($scope, $routeParams, User) {
  $scope.edit = true;
  $scope.error = true;
  $scope.incomplete = false; 


  $scope.$watch('passw1',function() {$scope.test();});
  $scope.$watch('passw2',function() {$scope.test();});
  $scope.$watch('fName', function() {$scope.test();});
  $scope.$watch('lName', function() {$scope.test();});
  $scope.$watch('title', function() {$scope.test();});
  $scope.$watch('sex', function() {$scope.test();});
  $scope.$watch('age', function() {$scope.test();});

  $scope.test = function() {
    if ($scope.passw1 !== $scope.passw2) {
      $scope.error = true;
      } else {
      $scope.error = false;
    }
    $scope.incomplete = false;
    if ($scope.edit && (!$scope.fName.length ||
    !$scope.lName.length || !$scope.passw1.length || 
    !$scope.passw2.length || !$scope.title.length || 
    !$scope.sex.length || $scope.age < 0)) {
       $scope.incomplete = true;
    }
  };

  $scope.edit = function() {
      User.edit($scope, $routeParams.id);
  };

})