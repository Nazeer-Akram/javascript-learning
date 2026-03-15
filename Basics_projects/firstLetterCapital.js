//=============================================== Task Making First Letter Capital of nazeer-zubair-hamza
let myValues = "nazeer-zubair-hamza";

function myFirstLetterToUpper(myParam) {
  let converToAnArr = myParam.split("-");
  let myFinalValues = [];

  let counter = 0;
  while (counter < converToAnArr.length) {
    let value1 = converToAnArr[counter];
    let myFirstLetter = value1[0].toUpperCase();
    let myRestLetter = value1.slice(1);

    let letConcatinating = myFirstLetter + myRestLetter;
    myFinalValues.push(letConcatinating);

    counter++;
  }
  return myFinalValues;
}

let myValue = myFirstLetterToUpper(myValues);
console.log(myValue.join(" "));
