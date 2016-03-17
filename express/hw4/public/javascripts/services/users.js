angular.module('myApp')
.factory("User", function UserFactory($http) {

	var users = [];

	return {
		users : users,
		getUsers: function($http, $scope) {
			$http.get("/users")
    		.then(function(response) {	
        		$scope.users = response.data.users;
    		});
		},
		add : function($scope){   
		    users.push({ 'id': users[ users.length-1].id+1,
		       'fName':$scope.fName, 'lName':$scope.lName, 'title': $scope.title, 
		       'sex':$scope.sex, 'age':$scope.age });
		},
		edit : function($scope, id) {
	      users[id].fName = $scope.fName;
	      users[id].lName = $scope.lName;
	      users[id].title = $scope.title; 
	      users[id].sex = $scope.sex;
	      users[id].age = $scope.age;
	      users[id].id= $scope.id;
  		},
  		delete : function(index){        
    		users.splice(index, 1); 
  		}
	}
})