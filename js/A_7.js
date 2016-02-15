//1.7. Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050.
for (var year = 2014; year <= 2050; year++) {
    var date = new Date(year, 0, 1);
    if (date.getDay() == 0) {
        console.log(year);
    }
}