import ibisTwoCents from "/ibisTwoCents.json" assert { type: "json" };
// elements of the document to be changed
const getWeatherButton = document.getElementById("search-addon");
const loc = document.getElementById("place");
const locCountry = document.getElementById("country");
const current = document.getElementById("curTemp");
const feel = document.getElementById("feelLike");
const minT = document.getElementById("mnTemp");
const maxT = document.getElementById("mxTemp");
const weatherDescrip = document.getElementById("description");
const celsius = document.getElementById("inlineRadio1");
const farenheit = document.getElementById("inlineRadio2");
const message = document.getElementById("errorMessage");
const opinion = document.getElementById("opinion");
const url = "http://localhost:3000/weather";

// event listeners
farenheit.addEventListener("click", () => {
  (farenheit.checked = true), (celsius.checked = false);
});

celsius.addEventListener("click", () => {
  (celsius.checked = true), (farenheit.checked = false);
});

getWeatherButton.addEventListener("click", getInfo);

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    getWeatherButton.click();
  }
});

// function that obtains information from weather API
async function getInfo(e) {
  e.preventDefault();
  const city = document.getElementById("city").value;
  const data = { cityName: city };
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const requestedWeatherData = await res.json();

  if (requestedWeatherData.cod === "404") {
    message.hidden = false;
    message.innerText = requestedWeatherData.message;
    return;
  } else {
    message.hidden = true;
  }
  // if we get weather data back successfully, then this object will be accessed
  const locationData = requestedWeatherData.name,
    currentTempK = requestedWeatherData.main.temp,
    feelsLikeK = requestedWeatherData.main.feels_like,
    minTempK = requestedWeatherData.main.temp_min,
    maxTempK = requestedWeatherData.main.temp_max,
    descrip = requestedWeatherData.weather[0].description,
    typeOfWeather = requestedWeatherData.weather[0].main;

  getIbisOpinion(typeOfWeather);

  // using obtained variables to update the state of the view
  loc.innerText = locationData;
  locCountry.innerText = requestedWeatherData.sys.country;
  displayTemp(currentTempK, feelsLikeK, minTempK, maxTempK);
  weatherDescrip.innerText = descrip;
}

// Helper functions
function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}
function kelvinToFahrenheit(kelvin) {
  return ((kelvin - 273.15) * 9) / 5 + 32;
}

function displayTemp(currentTempK, feelsLikeK, minTempK, maxTempK) {
  if (celsius.checked) {
    current.innerText = kelvinToCelsius(currentTempK).toFixed(2) + "ᵒC";
    feel.innerText = kelvinToCelsius(feelsLikeK).toFixed(2) + "ᵒC";
    minT.innerText = kelvinToCelsius(minTempK).toFixed(2) + "ᵒC";
    maxT.innerText = kelvinToCelsius(maxTempK).toFixed(2) + "ᵒC";
  } else {
    current.innerText = kelvinToFahrenheit(currentTempK).toFixed(2) + "ᵒF";
    feel.innerText = kelvinToFahrenheit(feelsLikeK).toFixed(2) + "ᵒF";
    minT.innerText = kelvinToFahrenheit(minTempK).toFixed(2) + "ᵒF";
    maxT.innerText = kelvinToFahrenheit(maxTempK).toFixed(2) + "ᵒF";
  }
}

function getIbisOpinion(typeOfWeather) {
  for (let i = 0; i < ibisTwoCents.length; i++) {
    if (ibisTwoCents[i].main === typeOfWeather) {
      opinion.innerText = '"' + ibisTwoCents[i].ibisTwoCents + '"';
    }
  }
}
