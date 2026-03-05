let learningDate = new Date("2026-03-04");

//1. console.log(learningDate); //Date in the Simple Date time Format.

//2. console.log(learningDate.toString()); // In string Format.

//3. console.log(learningDate.toLocaleString()); //Returns Date time in slash format.

//4. console.log(learningDate.toLocaleDateString()); //Returns Only Date in slash format.

//5. console.log(learningDate.toLocaleTimeString()); //Returns Only time in slash format.

//6. console.log(learningDate.getTime()); // Returns date in Milisecond Format.

//7. let convertEpochToTime = new Date(learningDate); // Converting Epoch time (Miliseconds) to date format

//8. console.log(convertEpochToTime.toLocaleString("IN-en"));

//Task_1. let have task let say there is date of 04-03-2026, here you need to add or increase a day to make it 05-03-2026

let convertTo = learningDate.getTime();

let addOneToDate = convertTo + 24 * 60 * 60 * 1000;

console.log(convertTo);

console.log(addOneToDate);

let finalDate = new Date(addOneToDate);

console.log(finalDate.toLocaleDateString());
