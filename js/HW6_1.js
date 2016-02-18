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
	this.a = a;
	this.b = b;
	this.c = c;
}

Triangle.prototype = {
	constructor : Triangle,
	getPerimeter : function() {
		return this.a + this.b + this.c;
	}
}

Triangle.prototype = new shape();
Triangle.prototype.constructor = Triangle;

var t = new Triangle(1, 2, 3);
console.log(t.constructor === Triangle);
console.log(shape.isPrototypeOf(t));
console.log(t.getPerimeter());



