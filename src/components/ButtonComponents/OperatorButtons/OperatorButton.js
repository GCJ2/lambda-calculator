import React from "react";

const OperatorButton = (props) => {
  return (
    <button className = "operatorButton"
      onClick={() =>
      props.addOperator(props.value)}>
      {props.text}
    </button>
  );
};

export default OperatorButton;
