//11. Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
// [ Formula : c/5 = f-32/9 [ where c = temperature in celsius and f = temperature in fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
  var cTemp = 60;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+"\xB0C is " + cToFahr + " \xB0F.";
  console.log(message);