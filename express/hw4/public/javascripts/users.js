angular.module('myApp', ['ngRoute', 'angularUtils.directives.dirPagination'])
.config(function($routeProvider) {
    $routeProvider

      // route for the home page
      .when('/', {
        templateUrl : 'templates/userList.html',
        controller  : 'userCtrl'
      })
      // route for the list page
      .when('/userList', {
        templateUrl : 'templates/userList.html',
        controller  : 'userCtrl'
      })

      // route for the new page
      .when('/newUser', {
        templateUrl : 'templates/newUser.html',
        controller  : 'newCtrl'
      })

      // route for the edit page
      .when('/editUser/:id', {
        templateUrl : 'templates/editUser.html',
        controller  : 'editCtrl'
      });
  })


