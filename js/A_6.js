//1.6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
var year = 1996;

var result = year % 100  == 0 ? year % 400 === 0 : year % 4 === 0;
console.log(result);