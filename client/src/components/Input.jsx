import React from "react";

const style = {
  width: "20%",
  padding: "12px 20px",
  margin: "8px 0",
  display: "inline-block",
  border: "1px solid #ccc",
  borderRadius: "20px",
  boxSizing: "border-box",
};

function Input(props) {
  return (
    <div>
      <form>
        <label for="locationInput"></label>
        <input
          style={style}
          type="text"
          id="locationInput"
          name="location"
          placeholder="Enter a City or Postcode..."
        />
        <button style={style} type="submit" value="Submit">
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
}

export default Input;
