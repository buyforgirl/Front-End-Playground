//5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically
// removing one letter from the end of the string and attaching it to the front.
var text = "w3resource";
text = text[text.length - 1] + text.substring(0, text.length - 1);
console.log(text);