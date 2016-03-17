angular.module('myApp')
.controller('userCtrl', function($scope, $location, User) {
  $scope.fName = '';
  $scope.lName = '';
  $scope.passw1 = '';
  $scope.passw2 = '';
  $scope.title = '';
  $scope.sex = '';
  $scope.age;
  $scope.users = User.users;

  $scope.toEdit = function(id) {
    $location.path('/editUser/' + id);
  }

  $scope.orderBy = function(x) {
    $scope.order = x;
  };

  $scope.delete = function(index) {
    User.delete(index);
  };
})
