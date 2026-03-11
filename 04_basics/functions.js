//Function with Parameters, argument, console, return
//console.log(); only prints the funstion value.
//return; Returns a final result of the function and can be store in a variable.

function callingString(value_1, value_2) {
  return value_1 + value_2;
}

//Here in this case we are getting values from the finction to this variable because of return
let variableFun = callingString(1, 2);

//_____________________________

function returnVariable(value_1, value_2) {
  let ReturnVar = value_1 + value_2;

  return ReturnVar;
}
//console.log("Roll No ", returnVariable(1, 5));

//_____________________________ what if we do not pass any parameters then ?____________________

function withoutParameter(num_1) {
  return num_1;
}
console.log(withoutParameter()); // this returns undefined

//_____________________________ Default Argument value in parameters____________________

function withoutParameter(num_1 = "Nazeer") {
  return num_1;
}
console.log(withoutParameter());
