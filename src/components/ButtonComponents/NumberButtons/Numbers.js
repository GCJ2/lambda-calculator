import React, { useState } from "react";
import { numbers } from "../../../data";


//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [number, setNumber] = useState(numbers)
  console.log({number});
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      <p>Numbers</p>
      { numbers.map((number, index) => <numButton key={index} number={number} />) }
    </div>
  );
};

export default Numbers;
