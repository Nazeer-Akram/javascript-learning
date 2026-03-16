//----------------------------------------------------Task 6: The "Fake" Data Generator

let myDataGen = 1258;

function myfunction(counterLength) {
  let counter = 0;
  let dataInString = "";

  while (counter < counterLength) {
    dataInString += "1";
    counter++;
  }
  return dataInString;
}

console.log(myfunction(myDataGen));

let myArr1 = [100, 200, 300, 400, 500, 600];
