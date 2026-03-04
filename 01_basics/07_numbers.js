let numberObj = new Number(1);

//console.log(numberObj.toString()); // toString: Converts Numbers to string
//console.log(numberObj.toFixed(10)); // toFixed : Adds Decimal and 0 as per passed values.
//console.log(numberObj.toPrecision(2)); // toPrecision : Consider only the passed digits only before the decimal value starts from 3 atleast.
//console.log(numberObj.toLocaleString("IN-en")); // toLocalString : Sets the counting standards.

// /-----------------Math Method---------------

let randomValueTest = Math.random() * 10 + (30 - 10) + 1; // range 0 to 0.999 : Generating random Numbers between 21 to 30

//console.log(Math.floor(randomValueTest)); // Always Consider the values before decimal

let numberWithMath = 13.4;

console.log(Math.floor(numberWithMath)); // Always considerd before decimal values
console.log(Math.round(numberWithMath)); // Works on 0.5 Behalf
console.log(Math.ceil(numberWithMath)); //Works on 0.1 Behalf
