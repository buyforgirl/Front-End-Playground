angular.module('myApp', ['ui.bootstrap']).controller('userCtrl', function($scope) {
$scope.currentPage = 1;
$scope.pageSize = 7;
$scope.fName = '';
$scope.lName = '';
$scope.passw1 = '';
$scope.passw2 = '';
$scope.title = '';
$scope.sex = '';
$scope.age = '';
$scope.users = [
{id:1, fName:'Hege', lName:"Pege", title:'student', sex:'male', age:'20'},
{id:2, fName:'Kim',  lName:"Pim", title:'teacher', sex:'female', age:'30'},
{id:3, fName:'Sal',  lName:"Smith", title:'software engineer', sex:'male', age:'25'},
{id:4, fName:'Jack', lName:"Jones", title:'nurse', sex:'female', age:'26'},
{id:5, fName:'John', lName:"Doe", title:'worker', sex:'male', age:'22'},
{id:6, fName:'Peter',lName:"Pan", title:'driver', sex:'male', age:'23'},
{id:7, fName:'Aege', lName:"Pege", title:'student', sex:'male', age:'20'},
{id:8, fName:'Kkim',  lName:"Pim", title:'teacher', sex:'female', age:'30'},
{id:9, fName:'Saal',  lName:"Smith", title:'software engineer', sex:'male', age:'25'},
{id:10, fName:'Sck', lName:"Jones", title:'nurse', sex:'female', age:'26'},
{id:11, fName:'Oohn', lName:"Doe", title:'worker', sex:'male', age:'22'},
{id:12, fName:'Qeter',lName:"Pan", title:'driver', sex:'male', age:'23'}
];
$scope.edit = true;
$scope.error = false;
$scope.incomplete = false; 
$scope.hideform = true; 
$scope.editUser = function(id) {
  $scope.hideform = false;
  if (id == 'new') {
    $scope.edit = true;
    $scope.incomplete = true;
    $scope.fName = '';
    $scope.lName = '';
    $scope.title = '';
    $scope.sex = '';
    $scope.age = '';
  } else {
    $scope.edit = false;
    $scope.fName = $scope.users[id].fName;
    $scope.lName = $scope.users[id].lName;
    $scope.title = $scope.users[id].title;
    $scope.sex = $scope.users[id].sex;
    $scope.age = $scope.users[id].age;
    $scope.id = id;
  }
};

$scope.add = function() {
  if ($scope.edit) {  
    var user = {};
    user.fName = $scope.fName;
    user.lName = $scope.lName;
    user.title = $scope.title;
    user.sex = $scope.sex;
    user.age = $scope.age;
    user.id = $scope.users[$scope.users.length - 1].id + 1;
    $scope.users.push(user);
  } else {
    $scope.users[$scope.id].fName = $scope.fName;
    $scope.users[$scope.id].lName = $scope.lName;
    $scope.users[$scope.id].title = $scope.title;
    $scope.users[$scope.id].sex = $scope.sex;
    $scope.users[$scope.id].age = $scope.age;
  }
  $scope.fName = '';
  $scope.lName = '';
  $scope.title = '';
  $scope.sex = '';
  $scope.age = '';
}

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
  !$scope.lName.length ||
  !$scope.passw1.length || !$scope.passw2.length)) {
     $scope.incomplete = true;
  }
};

$scope.orderByMe = function(x) {
  $scope.myOrderBy = x;
}

$scope.deleteUser = function(id) {
   $scope.users.splice(id, 1);
}
})
.filter('startFrom', function() { 
  return function(data, start) {
    return data.slice(start);
  }
});