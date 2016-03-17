// L_3. Write a JavaScript program to get the length of an JavaScript object. 
//var student = { 
//name : "David Rayy", 
//sclass : "VI", 
//rollno : 12 }; 

Object.prototype.objSize = function() {
	var size = 0;
	for (var key in this) {
		if (this.hasOwnProperty(key)) {
			size++;
		}
	}
	return size;
} 

var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 }; 

console.log(student.objSize());
