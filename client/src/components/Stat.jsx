import React from "react";
import "./Stat.css";

function Stat(props) {
  return (
    <div className="statBox">
      <p className="stat">{props.statistic}</p>
      {props.icon}
      <p className="val">{props.value}</p>
    </div>
  );
}

export default Stat;
