import React from "react";
// import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";

const NumberButton = (props) => {


  return (
    <button className = "numButton"
      onClick={() =>
        props.addNumber(props.text)}>
      {props.text}
    </button>
  );
};

export default NumberButton;
