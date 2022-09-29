import "./App.css";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import Input from "./components/Input";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
const url = "/weather";

const theme = createTheme({
  typography: {
    fontFamily: "'Jua', sans-serif",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#FFC4C4",
    },
    secondary: {
      main: "#533483",
    },
    dark: {
      main: "#16213E",
    },
  },
});

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
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header text="Ibi's Simple Weather Guide 2.0" />
        <Input
          userInput={(location) => {
            setUserInput(location);
          }}
          noLocation={weatherData?.cod === "404"}
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
    </ThemeProvider>
  );
}

export default App;
