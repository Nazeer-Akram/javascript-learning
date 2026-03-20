const myArray = ["Home", "Office", "Park", "Gym", "School", "Collage"];

//-----------------------------------------------------------------------while loop
let myCounter = 0;
while (myCounter < myArray.length) {
  console.log(
    ` Here is the place name along with Array Iteration ${myArray[myCounter]}`,
  );
  myCounter++;
}

//-----------------------------------------------------------------------do while loop

// let myCounter = 6;

do {
  console.log(`Hi Iam Nazeer and working for my self ${myArray[myCounter]} `);
  myCounter++;
} while (myCounter < myArray.length);

//-----------------------------------------------------------------------for loop

for (let i = 0; i < myArray.length; i++) {
  console.log(`Hi My Name is Nazeer and i go to this place ${myArray[i]}`);
}
