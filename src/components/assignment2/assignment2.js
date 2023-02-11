import { useEffect, useState } from "react";
import "./assignment2.css";

function Assignment2() {
  const [availableSloth, setAvailableSloth] = useState(8);
  const [bookedSloth, setBookedSloth] = useState([]);

  const update = (id) => {
    let search = false;
    for (const i of bookedSloth) {
      if (i === Number(id)) {
        search = true;
        return;
      }
    }

    if (!search) {
      setBookedSloth((prev) => [...prev, Number(id)]);
      setAvailableSloth((prev) => prev - 1);
    }
  };

  return (
    <>
      <h1>Assignment 2</h1>
      <p>
        Available Parking slots = <big>{availableSloth}</big>
      </p>
      <p>
        Booked Parking slots = <big>{bookedSloth}</big>
      </p>
      <div className="slots-container">
        <div id={1} onClick={(e) => update(e.target.id)}>
          1
        </div>
        <div id={2} onClick={(e) => update(e.target.id)}>
          2
        </div>
        <div id={3} onClick={(e) => update(e.target.id)}>
          3
        </div>
        <div id={4} onClick={(e) => update(e.target.id)}>
          4
        </div>
        <div id={5} onClick={(e) => update(e.target.id)}>
          5
        </div>
        <div id={6} onClick={(e) => update(e.target.id)}>
          6
        </div>
        <div id={7} onClick={(e) => update(e.target.id)}>
          7
        </div>
        <div id={8} onClick={(e) => update(e.target.id)}>
          8
        </div>
      </div>
    </>
  );
}

export default Assignment2;
