// 1.9. Write a JavaScript program to calculate days left until next Christmas.
var today = new Date();
var Christmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
    Christmas.setFullYear();
}
var oneDay = 1000 * 60 * 60 * 24;
var leftDay = Christmas / oneDay - today / oneDay;
console.log(leftDay);