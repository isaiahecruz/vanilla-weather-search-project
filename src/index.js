function selectGame(event) {
  const selectedGame = event.target.value;
  const gameData = schedule[selectedGame];

  const opponent = gameData.who;
  const gameDate = gameData.when;
  const location = gameData.where;
  const stadiumName = gameData.stadium;
  const weeklyChant = gameData.chantName;

  const defaultOpponent = "";
  const defaultGameDate = "";
  const defaultLocation = "";
  const defaultStadium = "Stadium";
  const defaultWeeklyChant = "BTHO Everyone!";

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

  if (opponent == undefined) {
    opponentElement.innerHTML = `${defaultOpponent}`;
    gameDateElement.innerHTML = `${defaultGameDate}`;
    locationElement.innerHTML = `${defaultLocation}`;
    stadiumNameElement.innerHTML = `${defaultStadium}`;
    weeklyChantElement.innerHTML = `${defaultWeeklyChant}`;
  } // should I make a function that injects the 'default' html values when the '2024 schedule' option gets chosen?

  console.log(selectedGame);

  function displayWeather(response) {
    const currentWeatherElement = document.querySelector("#currentWeather");
    const currentTempElement = document.querySelector("#current-temp");
    const feelsLikeElement = document.querySelector("#feelsLike");
    const windSpeedElement = document.querySelector("#mph");
    const humidityElement = document.querySelector("#humidity");

    let weather = response.data.weather[0].main;
    let temp = response.data.main.temp;
    let realFeel = response.data.main.feels_like;
    let windSpeed = response.data.wind.speed;
    let humidity = response.data.main.humidity;

    currentWeatherElement.innerHTML = `${weather}`;
    currentTempElement.innerHTML = `${Math.round(temp)}`;
    windSpeedElement.innerHTML = `${Math.round(windSpeed)}`;
    feelsLikeElement.innerHTML = `${Math.round(realFeel)}`;
    humidityElement.innerHTML = `${humidity}`;

    function changeIcon(icon) {
      let weatherEmoji = icon.config.url;
      const iconElement = document.querySelector("#weather-emoji");
      iconElement.innerHTML = `<img src="${weatherEmoji}" alt="dynamic and responsive weather icon"
              id="weather-emoji">`;
    }
    let weatherEmoji = response.data.weather[0].icon;
    let iconApi = `https://openweathermap.org/img/wn/${weatherEmoji}@2x.png`;
    axios.get(iconApi).then(changeIcon);
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
    when: "September 21 @ 6:30 PM",
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
    when: "October 5 @ 11:00 AM",
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
    when: "November 16 @ 6:45 PM",
    where: "College Station, TX",
    stadium: "Kyle Field",
    chantName: "New Mexico State",
    lat: 30.6183939,
    lon: -96.3455991,
  },
  game11: {
    who: "Auburn University",
    when: "November 23 @ ",
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
//How do I manipulate the innerHTMLs (with if statement) to return to default(refreshed page) values? (line 29)
