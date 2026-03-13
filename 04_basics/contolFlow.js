//summary
// 1. if condotion
// 2. if else Consitions
// 3. Nested if else if else
// 4. Switch
// 5. Implicit Return with truthy values
// 6. nullish colience operator
// 7. Ternary Operator
// 8. Truthy and Falsy values

//===================================== 1. if condotion

// const myValue = "1001";

// if (myValue == 100) {
//   console.log(`The above statemente is true and the value is ${myValue}`);
// }

//===================================== 2. if else Consitions
// const myValue2 = "1001";

// if (myValue2 == 100) {
//   console.log(`The above statemente is true and the value is ${myValue}`);
// } else {
//   console.log(
//     `The value is not matched with condition current value us ${myValue}`,
//   );
// }

//===================================== 3. if else if Consitions
// const myValue3 = "0";
// const isNameAvailabel = true;
// const nameForCondition = "Nazeer Akram";

// if (myValue3 >= 0 && myValue3 < 99 && isNameAvailabel) {
//   console.log(
//     `The value is greater than ${myValue3} and the user name is ${isNameAvailabel} having range from 0 to 199 `,
//   );
// } else if (myValue3 > 99 && myValue3 < 199 && isNameAvailabel) {
//   console.log(
//     `The value is greater than ${myValue3} and the user name is ${isNameAvailabel} having range from 99 to 199  `,
//   );
// } else if (myValue3 > 199 && myValue3 < 299 && isNameAvailabel) {
//   console.log(
//     `The value is greater than ${myValue3} and the user name is ${isNameAvailabel} having range from 199 to 299 `,
//   );
// } else {
//   console.log(`You have entered a value more than 300`);
// }

//===================================== 4. Switch Case

const mySwitchValue = 4;

switch (mySwitchValue) {
  case 1:
    console.log("Mango");
    break;

  case 2:
    console.log("Apple");
    break;

  case 3:
    console.log("Banana");
    break;

  case 4:
    console.log("Water Mellon");
    break;

  default:
    console.log(`Please Enter the correct value you enterd ${mySwitchValue}`);
    break;
}

//===================================== 5. Implicit Return with truthy values

const myImplicitValue = "";

if (myImplicitValue) console.log(`You name is ${myImplicitValue}`);

//===================================== 6. Nullish Coalecing Operator

let myNullis1 = undefined;
const myNullisVariable = myNullis1 ?? 20;
console.log(myNullisVariable);

//===================================== 7. Ternaery Operator
const myTernaryVariable = 0;

myTernaryVariable > 5
  ? console.log("The value is greater than 5")
  : console.log("The value is not greater than 5");

//===================================== 8. Truthy and falsey values

//truthy = true, " ", function, array , object
//falsey = false , "", 0, null , undefined, 0n and -0
