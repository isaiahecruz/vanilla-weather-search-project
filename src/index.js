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
    const weatherEmojiElement = document.querySelector("#weather-emoji");
    const currentTempElement = document.querySelector("#current-temp");
    const feelsLikeElement = document.querySelector("#feelsLike");
    const windSpeedElement = document.querySelector("#mph");
    const precipitationElement = document.querySelector("#precipitation");
    const humidityElement = document.querySelector("#humidity");

    let temp = response.data.main.temp;
    let realFeel = response.data.main.feels_like;
    let windSpeed = response.data.wind.speed;

    currentTempElement.innerHTML = `${Math.round(temp)}`;
    windSpeedElement.innerHTML = `${Math.round(windSpeed)}`;
    feelsLikeElement.innerHTML = `${Math.round(realFeel)}`;

    console.log(response.data);
  }

  const apiKey = "27a68ae2ac8d2666fcffa62a471df49c";
  let lat = gameData.lat;
  let lon = gameData.lon;
  let apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrlWeather).then(displayWeather);
}
let schedule = {
  game1: {
    who: "University of Notre Dame",
    when: "August 31 @ 6:30 PM",
    where: "College Station, TX",
    stadium: "Kyle Field",
    chantName: "Notre Dame",
    lat: 30.6183939,
    lon: -96.3455991,
  },
  game2: {
    who: "McNeese State University",
    when: "September 7 @ 11:45 AM",
    where: "College Station, TX",
    stadium: "Kyle Field",
    chantName: "McNeese State",
    lat: 30.6183939,
    lon: -96.3455991,
  },
  game3: {
    who: "University of Florida",
    when: "September 14 @ 2:30 PM",
    where: "Gainesville, FL",
    stadium: "Ben Hill Griffin Stadium",
    chantName: "Florida",
    lat: 29.6519684,
    lon: -82.3249846,
  },
  game4: {
    who: "Bowling Green University",
    when: "September 21 @ TBD",
    where: "College Station, TX",
    stadium: "Kyle Field",
    chantName: "Bowling Green",
    lat: 30.6183939,
    lon: -96.3455991,
  },
  game5: {
    who: "University of Arkansas",
    when: "September 28 @ TBD",
    where: "Arlington, TX",
    stadium: "AT&T Stadium",
    chantName: "Arkansas",
    lat: 32.7355816,
    lon: -97.1071186,
  },
  game6: {
    who: "University of Missouri",
    when: "October 5 @ TBD",
    where: "College Station, TX",
    stadium: "Kyle Field",
    chantName: "Mizzou",
    lat: 30.6183939,
    lon: -96.3455991,
  },
  game7: {
    who: "Mississippi State University",
    when: "October 19 @ TBD",
    where: "Starkville, MS",
    stadium: "Davis Wade Stadium",
    chantName: "Miss State",
    lat: 33.4503998,
    lon: -88.8183872,
  },
  game8: {
    who: "Louisiana State Univeristy",
    when: "October 26 @ TBD",
    where: "College Station, TX",
    stadium: "Kyle Field",
    chantName: "LSU",
    lat: 30.6183939,
    lon: -96.3455991,
  },
  game9: {
    who: "University of South Carolina",
    when: "November 2 @ TBD",
    where: "Columbia, SC",
    stadium: "Williams-Brice Stadium",
    chantName: "SC",
    lat: 34.0007493,
    lon: -81.0343313,
  },
  game10: {
    who: "New Mexico State University",
    when: "November 16 @ TBD",
    where: "College Station, TX",
    stadium: "Kyle Field",
    chantName: "New Mexico State",
    lat: 30.6183939,
    lon: -96.3455991,
  },
  game11: {
    who: "Auburn University",
    when: "November 23 @ TBD",
    where: "Auburn, AL",
    stadium: "Jordan-Hare",
    chantName: "Auburn",
    lat: 32.6098566,
    lon: -85.4807825,
  },
  game12: {
    who: "University of Texas",
    when: "November 30 @ TBD",
    where: "College Station, TX",
    stadium: "Kyle Field",
    chantName: "TU",
    lat: 30.6183939,
    lon: -96.3455991,
  },
};

let dropdownMenu = document.querySelector("#game-select");
dropdownMenu.addEventListener("change", selectGame);

//TO DO:
//Finish creating precipitation and humidity variables and their corresponding dynamic innerHTML
//Integrate dynamic weather emojis via openWeather API; correspond it to its innerHTML interface
//Consider a forecast option...
