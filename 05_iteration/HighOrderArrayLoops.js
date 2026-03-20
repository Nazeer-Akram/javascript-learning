// summary
// 1. forOf Loop
// 2. forOf Loop with map data type
// 3. forIn Loop specially designed for Plain Objects
// 4. foreach loop

const myArray = ["Home", "Office", "Park", "Gym", "School", "Collage"];

const myObj = {
  name: "Nazeer",
  age: 25,
  city: "Delhi",
};

//-------------------------------------------------------------forOf Loop

// for (const element of myArray) {
//   console.log(element);
// }

const myMap = new Map();

myMap.set("Name", "Nazeer");
myMap.set("Age", "25");
myMap.set("City", "Jaipur");
//-------------------------------------------------------------forOf Loop with map data type

// for (const [element, value] of myMap) {
//   console.log(element, value);
// }

//-------------------------------------------------------------forIn Loop specially designed for Plain Objects
for (const key in myObj) {
  console.log(`The Key is ${key} & the Value is ${myObj[key]}`);
}

//-------------------------------------------------------------foreach loop

let myVar;
myVar = myArray.forEach((iteration) => console.log(iteration));

console.log(myVar); //note it does not return any value it only does iteration means i short you cannot store the result in the variable
