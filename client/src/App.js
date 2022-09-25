import "./App.css";
// import {kelvinToCelsius, kelvinToFahrenheit} from "./helper";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import Input from "./components/Input";
import { useState, useEffect } from "react";
const url = "http://localhost:3001/weather";

function App() {
  const [userInput, setUserInput] = useState("");
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    // function that obtains information from weather API
    async function getInfo(input) {
      const data = { cityName: input };
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const resp = await res.json();
        setWeatherData(resp); // update the state of app with weather
      } catch (error) {
        console.log(error);
      }
    }
    if (userInput) {
      getInfo(userInput);
    }
  }, [userInput]);

  return (
    <div className="App">
      <Header text="Simple Weather App" />
      <Input
        userInput={(location) => {
          setUserInput(location);
        }}
      />
      <WeatherCard
        name={weatherData?.name}
        country={weatherData?.sys?.country}
        curTemp={weatherData?.main?.temp}
        feelsLike={weatherData?.main?.feels_like}
        maxTemp={weatherData?.main?.temp_max}
        minTemp={weatherData?.main?.temp_min}
        descrip={weatherData?.weather?.[0].description}
      />
    </div>
  );
}

export default App;
