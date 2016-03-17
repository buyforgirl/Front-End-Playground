//L 2. Write a JavaScript program to delete the rollno property from the following object.
// Also print the object before or after deleting the property. Go to the editor
// Sample object : 
// var student = { 
// name : "David Rayy", 
// sclass : "VI", 
// rollno : 12 };
function deleteProperty(obj, property) {
	var before = [];
	var after = [];
	for (var key in obj) {
		before.push(key);
	}
	console.log(before);
	
	delete obj[property];
	for (var key in obj) {
		 after.push(key);
	}
	console.log(after);
}

var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };

deleteProperty(student, 'rollno');
