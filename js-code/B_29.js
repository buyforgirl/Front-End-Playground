// 29. Write a JavaScript function to get the function name.
function getTheName() {
    console.log(arguments.callee.name);
}
getTheName();