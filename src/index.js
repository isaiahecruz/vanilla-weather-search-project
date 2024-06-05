function selectGame(event) {
  const selectedGame = event.target.value;
  const gameData = schedule[selectedGame];

  const opponent = gameData.who;
  const gameDate = gameData.when;
  const location = gameData.where;
  const stadiumName = gameData.stadium;
  const weeklyChant = gameData.chantName;

  let opponentElement = document.querySelector("#opponent");
  let gameDateElement = document.querySelector("#game-date");
  let locationElement = document.querySelector("#location");
  let stadiumNameElement = document.querySelector("#stadium-name");
  let weeklyChantElement = document.querySelector("#bthoWho");

  opponentElement.innerHTML = `${opponent}`;
  gameDateElement.innerHTML = `${gameDate}`;
  locationElement.innerHTML = `${location}`;
  stadiumNameElement.innerHTML = `${stadiumName}`;
  weeklyChantElement.innerHTML = `${weeklyChant}`;

  function displayWeather(response) {
    //let weatherEmojiElement = document.querySelector("#weather-emoji");
  }
} //Does the axios function go inside here??

let schedule = {
  game1: {
    who: "University of Notre Dame",
    when: "August 31 @ 6:30 PM",
    where: "College Station, TX",
    stadium: "Kyle Field",
    chantName: "Notre Dame",
  },
  game2: {
    who: "McNeese State University",
    when: "September 7 @ 11:45 AM",
    where: "College Station, TX",
    stadium: "Kyle Field",
    chantName: "McNeese State",
  },
  game3: {
    who: "University of Florida",
    when: "September 14 @ 2:30 PM",
    where: "Gainesville, FL",
    stadium: "Ben Hill Griffin Stadium",
    chantName: "Florida",
  },
  game4: {
    who: "Bowling Green University",
    when: "September 21 @ TBD",
    where: "College Station, TX",
    stadium: "Kyle Field",
    chantName: "Bowling Green",
  },
  game5: {
    who: "University of Arkansas",
    when: "September 28 @ TBD",
    where: "Arlington, TX",
    stadium: "AT&T Stadium",
    chantName: "Arkansas",
  },
  game6: {
    who: "University of Missouri",
    when: "October 5 @ TBD",
    where: "College Station, TX",
    stadium: "Kyle Field",
    chantName: "Mizzou",
  },
  game7: {
    who: "Mississippi State University",
    when: "October 19 @ TBD",
    where: "Starkville, MS",
    stadium: "Davis Wade Stadium",
    chantName: "Miss State",
  },
  game8: {
    who: "Louisiana State Univeristy",
    when: "October 26 @ TBD",
    where: "College Station, TX",
    stadium: "Kyle Field",
    chantName: "LSU",
  },
  game9: {
    who: "University of South Carolina",
    when: "November 2 @ TBD",
    where: "Columbia, SC",
    stadium: "Williams-Brice Stadium",
    chantName: "SC",
  },
  game10: {
    who: "New Mexico State University",
    when: "November 16 @ TBD",
    where: "College Station, TX",
    stadium: "Kyle Field",
    chantName: "New Mexico State",
  },
  game11: {
    who: "Auburn University",
    when: "November 23 @ TBD",
    where: "College Station, TX",
    stadium: "Jordan-Hare",
    chantName: "Auburn",
  },
  game12: {
    who: "University of Texas",
    when: "November 30 @ TBD",
    where: "College Station, TX",
    stadium: "Kyle Field",
    chantName: "TU",
  },
}; //Add state code and city name to each object? (for API url retrieval)

let dropdownMenu = document.querySelector("#game-select");
dropdownMenu.addEventListener("change", selectGame);

let apiKey = "27a68ae2ac8d2666fcffa62a471df49c";
let countryCode = "US";
let limit = "1";
let apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},${countryCode}&limit=${limit}&appid=${apiKey}`;
axios.get(apiUrl).then(displayWeather);

// Could we add keys to the 'Schedule' object to access city and state name (i.e., add city name & state codes)?
// How do I edit the apiUrl (using template literals) to access the city name and state code data? Can they be left as is?
