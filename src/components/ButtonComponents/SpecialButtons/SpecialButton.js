import React from "react";


const SpecialButton = (props) => {
  console.log(props.clearDisplay);
  return (
    <button className = "specialButton"
      onClick={() =>
      props.clearDisplay}>
      {props.text}
    </button>
  );
};

export default SpecialButton;
