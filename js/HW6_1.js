// 1.	Create a class called shape that has the property type and a getType() method.
// 2.	Define a Triangle() class who is a subclass of shape. Triangle() class should have three own properties—a, b, and c, representing the lengths of the sides of a triangle.
// 3.	Add a new method to its prototype called getPerimeter() to get a triangle's perimeter.
// 4.	Test your implementation with the following code:
// > var t = new Triangle(1, 2, 3);
// > t.constructor === Triangle;    
// true
// > shape.isPrototypeOf(t);
// true
// > t.getPerimeter();
//  6
// > t.getType();
       
// "triangle"
// 5.	Loop over t showing only own properties and methods (none of the prototype's).

function shape() {
}

shape.prototype = {
	getType : function() {
		return arguments.callee.name;
	}
}

function Triangle(a, b, c) {
	shape.call(this);
	this.a = a;
	this.b = b;
	this.c = c;
}

Triangle.prototype = Object.create(shape.prototype);
Triangle.prototype.constructor = Triangle;
Triangle.prototype.getPerimeter = function() {
		return this.a + this.b + this.c;
}


var t = new Triangle(1, 2, 3);
console.log(t.constructor === Triangle);
console.log(shape.prototype.isPrototypeOf(t));
console.log(t.getPerimeter());
for (var key in t) {
	if (t.hasOwnProperty(key)) {
		console.log(key);
	}
}




