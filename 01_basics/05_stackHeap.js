//Stack memory : This memory is used by Premitive (None Refrence Data Types) ex: string, number, bigint, undefined, null, symbol and Boolean

//Heap Memory : This memory is used by Non Premitve (Refrence Data Types) ex: Array, Objects & Funstions.

//Example of Stack memory

let stackMemory = "My Name is Nazeer";

let changeInStockMemory = stackMemory;

changeInStockMemory = "My Name is Waseem Akram"; //In Stack Memory changes hapening here only .

console.log(changeInStockMemory);

//Example of Heap memory

let myObj = {
  myName: "nazeer",
  age: 26,
};

let anotherObj = myObj;

anotherObj.age = 36; // change is done here it is also changing at the first variable too.

console.log(myObj.age);
console.log(anotherObj.age);
