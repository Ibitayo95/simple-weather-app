import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import "./Input.css";

function Input(props) {
  const [userLocation, setUserLocation] = useState("");
  // const [inputError, setInputError] = useState(false);

  function handleChange(event) {
    let value = event.target.value;
    setUserLocation(value); // use to update what location the user entered
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.userInput(userLocation); // change the parent component's state with input
  }

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          id="outlined-basic"
          label="Enter a city name"
          variant="outlined"
          size="small"
          color="primary"
          error={props.noLocation}
          helperText={props.noLocation && "City not found."}
        />
        <IconButton aria-label="send" type="submit">
          <SendIcon color="primary" />
        </IconButton>
      </form>
    </div>
  );
}

export default Input;
