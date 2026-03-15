//console.log("Nazeer");
//Captain: [Name]. Total Players registered in system: [Number]

function indianTeam(...allPlayers) {
  let captainPlayer;
  let restPlayrsCount = 0;
  let counter = 0;

  while (counter <= allPlayers.length) {
    if (counter == 0) {
      captainPlayer = allPlayers[counter];
    } else {
      restPlayrsCount += 1;
    }

    counter++;
  }

  return `Captain ${captainPlayer}. Total Players registered in system are : ${restPlayrsCount}`;
}

console.log(
  indianTeam("Virat Kohli", "Rohit Sharma", "Hardik Pandya", "Mohd Shami"),
);
