import React, { useState } from "react";
import Stat from "./Stat";
import { kelvinToCelsius, kelvinToFahrenheit } from "../helper";
import "./WeatherCard.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import SentimentSatisfiedAltTwoToneIcon from "@mui/icons-material/SentimentSatisfiedAltTwoTone";
import AcUnitTwoToneIcon from "@mui/icons-material/AcUnitTwoTone";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";

function WeatherCard(props) {
  const [alignment, setAlignment] = useState("celsius");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="card">
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="celsius">°C</ToggleButton>
        <ToggleButton value="fahrenheit">°F</ToggleButton>
      </ToggleButtonGroup>
      <Stat
        icon={<TravelExploreIcon color="primary" fontSize="large" />}
        statistic="Location"
        value={props.name && `${props.name} ${props.country}`}
      />
      <Stat
        icon={<DeviceThermostatIcon color="primary" fontSize="large" />}
        statistic="Current Temperature"
        value={
          props.curTemp &&
          (alignment === "celsius"
            ? kelvinToCelsius(props.curTemp)
            : kelvinToFahrenheit(props.curTemp))
        }
      />
      <Stat
        icon={
          <SentimentSatisfiedAltTwoToneIcon color="primary" fontSize="large" />
        }
        statistic="Feels Like"
        value={
          props.feelsLike &&
          (alignment === "celsius"
            ? kelvinToCelsius(props.feelsLike)
            : kelvinToFahrenheit(props.feelsLike))
        }
      />
      <Stat
        icon={<AcUnitTwoToneIcon color="primary" fontSize="large" />}
        statistic="Min Temp"
        value={
          props.minTemp &&
          (alignment === "celsius"
            ? kelvinToCelsius(props.minTemp)
            : kelvinToFahrenheit(props.minTemp))
        }
      />
      <Stat
        icon={<WbSunnyTwoToneIcon color="primary" fontSize="large" />}
        statistic="Max Temp"
        value={
          props.maxTemp &&
          (alignment === "celsius"
            ? kelvinToCelsius(props.maxTemp)
            : kelvinToFahrenheit(props.maxTemp))
        }
      />
      <Stat
        icon={<DescriptionTwoToneIcon color="primary" fontSize="large" />}
        statistic="Weather Description"
        value={props.descrip}
      />
    </div>
  );
}

export default WeatherCard;
