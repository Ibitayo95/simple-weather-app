import React from "react";

const style = {
  color: "purple",
};

function Header(props) {
  return <h1 style={style}>{props.text}</h1>;
}

export default Header;
