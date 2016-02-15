//3. Write a JavaScript program to get the current date.
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
month = month + 1;
if (month < 10) {
    month = "0" + month;
}
if (day < 10) {
    day = "0" + day;
}
console.log(month + "-" + day + "-" + year);