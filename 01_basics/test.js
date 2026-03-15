// const myArray_1 = ["Japipur", "Mumbai"];
// const myArray_2 = ["mumbai", "delhi", ["Ramnan", "Raju", [1, 2]]];
// const myArray_3 = ["banglore", "chennai"];

// let mergeAllArr = [...myArray_1, ...myArray_2, ...myArray_3];

// let sortingarray = myArray_2.flat(2);

// console.log(sortingarray);

//let myVarValue = ["Mango", "Orange", "Stawbarry", "Apple"];

// function myCartFunction(myVarVal) {
//   console.log(myVarVal);
// }

// myCartFunction(myVarValue);

//with rest operatror
// let myvarValueIndi = "Banana";

// function myCartFunction2(...myVarVal2) {
//   return console.log(myVarVal2);
// }

// myCartFunction2(myvarValueIndi);

//let myVariable = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//-------------------------------------------------------------------- Task 2: Find the sum of argument passed in REST operator
function myFunction_2(...parametervalue) {
  //console.log(parametervalue);

  let i = 0;
  let addition = 0;
  while (i < parametervalue.length) {
    addition = addition + parametervalue[i];
    i++;
  }

  return addition;
}

//console.log(myFunction_2(1, 2, 3, 4, 5, 6));
//-------------------------------------------------------------------- Task 2: from the given argument need to differntitate king and kingdom the the first data would be considerd a king and rest should be considered as kingdom usw Rest Operator for the solution
function evenOrganise(...totalCount) {
  let Specialguest = "";
  let restGust = "";
  let counter = 0;

  while (counter < totalCount.length) {
    if (counter == 0) {
      Specialguest = totalCount[counter];
    } else {
      restGust = restGust + " " + totalCount[counter];
    }

    counter++;
  }

  return console.log(`The special gust is ${Specialguest} and the rest gust are 
    ${restGust}`);
}

//evenOrganise("Nazeer", "Zubair &", "Hamza");

//=============================== Includes searching with positive and negative second parameter ==========

let myVariable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myVariable.includes(5, 2)); //result is true becuase its searching from the 4,5,6,7,8,9,10 and 5 is available

let myFruits = ["Orange", "Apple", "Banana", "mango", "Stawberry", "Papaya"];
console.log(myFruits.includes("Stawberry", -2)); //result is true because its searching under the last 2 values
