function selectGame(event) {
  const selectedGame = event.target.value;
  const gameData = schedule[selectedGame];

  const opponent = gameData.who;
  const gameDate = gameData.when;
  const location = gameData.where;
  const stadiumName = gameData.stadium;
}

let schedule = {
  game1: {
    who: "University of Notre Dame",
    when: "August 31 @ 6:30 PM",
    where: "College Station, TX",
    stadium: "Kyle Field",
  },
  game2: {
    who: "McNeese State University",
    when: "September 7 @ 11:45 AM",
    where: "College Station, TX",
    stadium: "Kyle Field",
  },
  game3: {
    who: "University of Florida",
    when: "September 14 @ 2:30 PM",
    where: "Gainesville, FL",
    stadium: "Ben Hill Griffin Stadium",
  },
  game4: {
    who: "Bowling Green University",
    when: "September 21 @ TBD",
    where: "College Station, TX",
    stadium: "Kyle Field",
  },
  game5: {
    who: "University of Arkansas",
    when: "September 28 @ TBD",
    where: "Arlington, TX",
    stadium: "AT&T Stadium",
  },
  game6: {
    who: "University of Missouri",
    when: "October 5 @ TBD",
    where: "College Station, TX",
    stadium: "Kyle Field",
  },
  game7: {
    who: "Mississippi State University",
    when: "October 19 @ TBD",
    where: "Starkville, MS",
    stadium: "Davis Wade Stadium",
  },
  game8: {
    who: "Louisiana State Univeristy",
    when: "October 26 @ TBD",
    where: "College Station, TX",
    stadium: "Kyle Field",
  },
  game9: {
    who: "University of South Carolina",
    when: "November 2 @ TBD",
    where: "Columbia, SC",
    stadium: "Williams-Brice Stadium",
  },
  game10: {
    who: "New Mexico State University",
    when: "November 16 @ TBD",
    where: "College Station, TX",
    stadium: "Kyle Field",
  },
  game11: {
    who: "Auburn University",
    when: "November 23 @ TBD",
    where: "College Station, TX",
    stadium: "Jordan-Hare",
  },
  game12: {
    who: "University of Texas",
    when: "November 30 @ TBD",
    where: "College Station, TX",
    stadium: "Kyle Field",
  },
};
let dropdownMenu = document.querySelector("#game-select");
dropdownMenu.addEventListener("change", selectGame);

// create IDs in the HTML for targeting with JavaScript to update values
// create javasctript variables (const, let) to update values

//INSIDE OF THE SELECT GAME FUNCTION
// use variables to manipulate innherHTML
