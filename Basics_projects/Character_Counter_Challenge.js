//----------------------------------------------------Task 3: Character Counter Challenge)
const myVar = "JavaScript";

function myCharCount(myParameterVal) {
  let convertToEachChar = Array.from(myParameterVal);
  let totalCount = 0;

  let counter = 0;

  //console.log(convertToEachChar);
  while (counter < convertToEachChar.length) {
    totalCount += 1;

    counter++;
  }

  return totalCount;
}
