import React from "react";
import Stat from "./Stat";
import { kelvinToCelsius } from "../helper";
import "./WeatherCard.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import SentimentSatisfiedAltTwoToneIcon from "@mui/icons-material/SentimentSatisfiedAltTwoTone";
import AcUnitTwoToneIcon from "@mui/icons-material/AcUnitTwoTone";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";

const theme = createTheme({
  palette: {
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

function WeatherCard(props) {
  // add state to track whether we are in celsius or farenheight
  // link to a toggle which updates this state (see switch on material ui)
  // useEffect that runs conversion on all the numbers (if they exist) -> this only runs when state changes

  return (
    <ThemeProvider theme={theme}>
      <div className="card">
        <Stat
          icon={<TravelExploreIcon color="primary" fontSize="large" />}
          statistic="Location"
          value={props.name}
        />
        <Stat
          icon={<DeviceThermostatIcon color="primary" fontSize="large" />}
          statistic="Current Temperature"
          value={props.curTemp && kelvinToCelsius(props.curTemp)}
        />
        <Stat
          icon={
            <SentimentSatisfiedAltTwoToneIcon
              color="primary"
              fontSize="large"
            />
          }
          statistic="Feels Like"
          value={props.feelsLike && kelvinToCelsius(props.feelsLike)}
        />
        <Stat
          icon={<AcUnitTwoToneIcon color="primary" fontSize="large" />}
          statistic="Min Temp"
          value={props.minTemp && kelvinToCelsius(props.minTemp)}
        />
        <Stat
          icon={<WbSunnyTwoToneIcon color="primary" fontSize="large" />}
          statistic="Max Temp"
          value={props.maxTemp && kelvinToCelsius(props.maxTemp)}
        />
        <Stat
          icon={<DescriptionTwoToneIcon color="primary" fontSize="large" />}
          statistic="Weather Description"
          value={props.descrip}
        />
      </div>
    </ThemeProvider>
  );
}

export default WeatherCard;
