//NaN : when convert string to a number the value woul be NaN.
//NaN : when convert string with Number to a number the value woul be NaN.
//NaN : when convert undefined the value would be a NaN.


let stringWithNumToNumber = "11a";
let conversion = Number (stringWithNumToNumber);
console.log();//The output would be NaN

//------------------------------------------
let undefinedToNum = undefined
let convertUndefinedToNum = Number(undefinedToNum);
console.log(convertUndefinedToNum) //The output would be NaN

//------------------------------------------
let stringToNum = "stringValues"
let convertToNum = Number(stringToNum);

console.log(convertToNum); //The output would be NaN


//Number () : used
//String ()
//Boolean ()