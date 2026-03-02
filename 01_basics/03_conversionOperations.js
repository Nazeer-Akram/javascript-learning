//NaN : when convert string to a number the value woul be NaN.
//NaN : when convert string with Number to a number the value woul be NaN.
//NaN : when convert undefined the value would be a NaN.

let stringWithNumToNumber = "11a";
let conversion = Number(stringWithNumToNumber);
console.log(); //The output would be NaN

//------------------------------------------
let undefinedToNum = undefined;
let convertUndefinedToNum = Number(undefinedToNum);
console.log(convertUndefinedToNum); //The output would be NaN

//------------------------------------------
let stringToNum = "stringValues";
let convertToNum = Number(stringToNum);

console.log(); //The output would be NaN

//Number () : used to convert a value in a Number.
//String () : used to convert a value in a string.
//Boolean () : usd to convert a value in a Boolean.

//Arthematic Operators and Operations

// + : Addition Operator
// - : Substraction Operator
// / : Division Operator
// * : Multiplication Operator
// ** : Square Operator
// % : Modulas Operator

//Addition with number + string and Booloean

let tVariables = 1 + true + 3 + 4;
let tVariables_2 = "1" + 1 + 2 + 3 + 1;

console.log(tVariables_2 + typeof tVariables_2);

//++ : Prefix addition
//n++: Postfix Addition
