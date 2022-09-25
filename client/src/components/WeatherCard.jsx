import React from "react";
import Stat from "./Stat";
import { kelvinToCelsius } from "../helper";

const style = {
  borderStyle: "solid",
  borderRadius: "20px",
  margin: "auto",
  marginTop: "1%",
  width: "50%",
};

function WeatherCard(props) {
  return (
    <div style={style}>
      <Stat statistic="Location" value={props.name} />
      <Stat
        statistic="Current Temperature"
        value={kelvinToCelsius(props.curTemp) + "°C"}
      />
      <Stat
        statistic="Feels Like"
        value={kelvinToCelsius(props.feelsLike) + "°C"}
      />
      <Stat
        statistic="Min Temp"
        value={kelvinToCelsius(props.minTemp) + "°C"}
      />
      <Stat
        statistic="Max Temp"
        value={kelvinToCelsius(props.maxTemp) + "°C"}
      />
      <Stat statistic="Weather Description" value={props.descrip} />
    </div>
  );
}

export default WeatherCard;
