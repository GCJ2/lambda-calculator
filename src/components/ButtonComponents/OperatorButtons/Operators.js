import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton"

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operator, setOperator] = useState(operators)

  return (
    <div className="operators">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {operator.map((operator, index) =>
        <OperatorButton
        key={index}
        value={operator.value}
        text = {operator.char}
        addOperator={props.addOperator}
        />
      )}

    </div>
  );
};

export default Operators;

/*  {operator.map((operator, index) => {
    return <button className="operatorButton" key={operator} value={operator.value}>{operator.char}</button>
  })

  }*/
