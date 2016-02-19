// L 1. Write a JavaScript program to list the properties of a JavaScript object 
// Sample object : 
// var student = { 
// name : "David Rayy", 
// sclass : "VI", 
// rollno : 12 };
// Sample Output : name,sclass,rollno

function printProperties(obj) {
	var array = [];
	for (var key in obj) {
		array.push(key);
	}
	return array;
}

var student = { 
	name : "David Rayy", 
 	sclass : "VI", 
	rollno : 12 
};

console.log(printProperties(student));
