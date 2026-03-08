let mySymbol = Symbol("Nazeer");

const myObjects = {
  name: "nazeer",
  age: 84,
  "father name": "Kamar ali",
  [mySymbol]: 123456,
  above_18: true,
  availableCity: ["Delhi", "Jaipur"],
};

console.log(myObjects.age); //simple calling
console.log(myObjects["age"]); //Key as calling as String
console.log(myObjects["father name"]); //Key as space calling as String
console.log(typeof myObjects[mySymbol]); // key as calling symbol

console.log(myObjects);

//used to freez the object after usingthis method no change will be executed on objcet
Object.freeze(myObjects);

//Re-Assigning the value but will not be assign
myObjects.age = 58;

console.log(myObjects["age"]);

//Function As Key pair value
myObjects.myFunction = function () {
  console.log("Hi i am nazeer calling from inside the object");
};

console.log(myObjects.myFunction);
