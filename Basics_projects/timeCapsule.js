//Task 2: The "JavaScript Journey" Time Capsule
//The Goal: Calculate exactly how many days have passed since you started learning JavaScript and display it in a human-readable format.

//Solution : Started Learning JavaScript from 1st March 2026

const firstDayOfJs = new Date("2026-03-01").getTime();
const currentDate = Date.now();

//Taking total no of days since JS started learning  by subtracting started date from current date in misliseconds format
const totalNoOfDays = currentDate - firstDayOfJs;

let daysInReadableFormat = totalNoOfDays / (24 * 60 * 60 * 1000);
//let converDateINDFormat = firstDayOfJs.toLocaleDateString("IN-en");
//console.log(daysInReadableFormat);

//=============================Task 2 ===============================
//Task 2 : Calculate no of days you left to complete your javascript based on your target date whcih is 31-03-2026

const targatedDate = new Date("2026-03-31").getTime();

let totalDaysLeft = targatedDate - currentDate;

let miliToReadableFormat = totalDaysLeft / (24 * 60 * 60 * 1000);

console.log(Math.ceil(miliToReadableFormat));
