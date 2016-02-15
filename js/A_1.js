// 1 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Friday.
// Current time is : 4 PM : 50 : 22

var date = new Date();
var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is :" + weekDay[date.getDay()]);
var hour = date.getHours();
if (hour > 12) {
    hour = hour - 12 + " PM";
} else {
    hour = hour + " AM";
}
var minute = date.getMinutes();
if (minute < 10) {
    minute = "0" + minute;
}
var second = date.getSeconds();
if (second < 10) {
    second = "0" + second;
}
console.log("Current time is :" + hour + ": " + minute + ": " + second);
