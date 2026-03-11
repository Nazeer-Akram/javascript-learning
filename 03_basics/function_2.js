//summary;

//function with rest Operartor   : used for multiple parameters without defining them individualy
//object in function
//object in function

//Rest Operator : This returns avalue in the form of an arrray

function learningRestOperator(num_1, num_2, ...value_1) {
  return value_1;
}

//console.log(learningRestOperator(200, 200, 1235, 4458));

//Function with Object
let myObj = {
  nameValue: "Nazeer akram",
  ageValue: 25,
  contactValue: 9971651687,
};

function myFunOBJ(myObj) {
  return `Hi iam ${myObj.nameValue} and My contact no is ${myObj.contactValue}`;
}

//console.log(myFunOBJ(myObj));

//Function with Array and Objects
const myArray = new Array("orange", "Mango", "Apple");

function familyFavFruit(myArrayVariable, myObj) {
  return `Hi im ${myObj.nameValue} my favourite Fruit is ${myArrayVariable[0]} and my mother's favourite Fruite is ${myArrayVariable[1]} you can contact me on ${myObj.contactValue}`;
}

console.log(familyFavFruit(myArray, myObj));
