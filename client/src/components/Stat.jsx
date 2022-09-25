import React from "react";

function Stat(props) {
  return (
    <div>
      <p>
        {props.statistic} -{">"} {props.value}
      </p>
    </div>
  );
}

export default Stat;
