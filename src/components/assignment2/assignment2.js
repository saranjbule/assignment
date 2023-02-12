import { useState } from "react";
import "./assignment2.css";
import Block from "./block";

function Assignment2() {
  const [availableSloth, setAvailableSloth] = useState(8);
  const update = (i) => {
    setAvailableSloth(prev => prev - 1);
  };

  return (
    <>
      <h1>Assignment 2</h1>
      <big>Available Parking slots = {availableSloth}</big>
      <br />
      <br />
      <div className="slots-container">
        {[...Array(availableSloth)].map((item, i) => (
          <Block
            id={i + 1}
            key={i}
            update={update}
          />
        ))}
      </div>
    </>
  );
}

export default Assignment2;
