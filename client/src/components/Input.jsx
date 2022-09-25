import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";

function Input(props) {
  const [userLocation, setUserLocation] = useState("");

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
          label="Enter a city or Postcode"
          variant="outlined"
          size="small"
        />
        <Button
          type="submit"
          style={{ backgroundColor: "purple", color: "white" }}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Get Weather
        </Button>
      </form>
    </div>
  );
}

export default Input;
