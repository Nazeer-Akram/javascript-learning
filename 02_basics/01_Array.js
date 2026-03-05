const myArr = [1, 2, 3, 4, 5, 6]; // Array lateral or Simple Array
const myArr2 = new Array(1, 2, 3, 4, 5, 6); // Array with constructor and methods
const myArrInsideArr = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
const stringTest = "My name is nazeer akram";

// /-------------------lets try Array methods------------------

let chngInArray = myArr.push(7); // Returns a addtion of a value at the last of an array.
let chngInArray_2 = myArr.pop(); // Returns a substraction of a value at the last of an array.
let chngInArray_3 = myArr.unshift(0); //Returns a addtion of a value at the starting of an array.
let chngInArray_4 = myArr.shift(0); //Returns a addtion of a value at the starting of an array.
let chngInArray_5 = myArr.includes(0);
let chngInArray_6 = myArr.indexOf(1);
let chngInArray_7 = myArr.slice(1, 3);
let chngInArray_8 = myArr.splice(1, 3);
let chngInArray_9 = myArr.join(); // Array To String

let testSplit = stringTest.split(" "); // returns an array on behalf of space
let testForm = Array.from(stringTest); // returns an array of each string char

let mergeTwoArray = [...myArr, "mango", ...myArr2]; //Return an new array with merged values

let chngInArray_10 = Array.of("Nazeer", "Akram"); //Return an array of passed values

let chngInArray_11 = Array.isArray(myArr); // Returns a Boolean value behalf of the condition.
let arrayInsideArray = myArrInsideArr.flat(1); // Returns a flatt array on behalf of passed dept

console.log(arrayInsideArray);
