angular.module('myApp')
.factory("User", function UserFactory() {
	var users = [
		  {id:1, fName:'Hege', lName:"Pege", title:'professor', sex:'male', age:55},
		  {id:2, fName:'Kim',  lName:"Pim", title:'professor', sex:'female', age:56},
		  {id:3, fName:'Sal',  lName:"Smith", title:'student', sex:'male', age:23},
		  {id:4, fName:'Jack', lName:"Jones", title:'student', sex:'male', age:34},
		  {id:5, fName:'John', lName:"Doe", title:'student', sex:'female', age:26},
		  {id:6, fName:'Peter',lName:"Pan", title:'staff', sex:'female', age:36},
		  {id:7, fName:'David', lName:"Pege", title:'staff', sex:'male', age:55},
		  {id:8, fName:'Mike',  lName:"May", title:'professor', sex:'female', age:60},
		  {id:9, fName:'Lucy',  lName:"Smith", title:'student', sex:'male', age:23},
		  {id:10, fName:'Lily', lName:"June", title:'student', sex:'male', age:22},
		  {id:11, fName:'Eric', lName:"Steve", title:'staff', sex:'female', age:26},
		  {id:12, fName:'Villion',lName:"Han", title:'staff', sex:'female', age:35}
		];
	return {
		users:users,
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