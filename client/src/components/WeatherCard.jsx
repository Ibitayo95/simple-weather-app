import React from "react";
import Stat from "./Stat";

const style = {
  borderStyle: "solid",
  borderRadius: "20px",
  margin: "auto",
  width: "50%",
};

function WeatherCard(props) {
  return (
    <div style={style}>
      <Stat statistic="Current Temperature" />
      <Stat statistic="Feels Like" />
      <Stat statistic="Max Temp" />
      <Stat statistic="Min Temp" />
      <Stat statistic="Weather Description" />
    </div>
  );
}

export default WeatherCard;
