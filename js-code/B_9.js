//2.9. Write a JavaScript function which accepts an argument and returns the type.
//Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function getDataType(args) {
    return typeof args;
}
console.log(getDataType(1));
console.log(getDataType("abc"));
console.log(getDataType(true));
console.log(getDataType([1, 2, 3]));
console.log(getDataType({'name':'aaa'}));