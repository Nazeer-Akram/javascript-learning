// Summary
// 1. Arry.map()------> Note : It is same as it as foreach but it returns the result or value
// 2. Array.filter()--> It works as filter or True or false it only resturns the searched value or return the empty array
// 3. Array.reduce()

const myArray = ["Home", "Office", "Park", "Gym", "School", "Collage"];
//---------------------------------------------------------------------------map()
let myVar = myArray.map((iteration) => `The iteration Value is ${iteration}`); //Note : It is same as it as foreach but it returns the result or value

//console.log(myVar);

//---------------------------------------------------------------------------filter()
console.log(myArray.filter((iterationValue) => iterationValue == "nazeer"));
