// 1.4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
//1.4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
var edge1 = 5;
var edge2 = 6;
var edge3 = 7;
var perimeter = (edge1 + edge2 + edge3) / 2;
var area = Math.sqrt(perimeter * (perimeter - edge1) * (perimeter - edge2) * (perimeter - edge3));
console.log(area);