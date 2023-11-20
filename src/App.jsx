/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

export default function App() {
  // the format "2023-11-21"
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);

  let birthDateObj = new Date(age);

  let currentDateObj = new Date();

  let ageInMilliseconds = currentDateObj - birthDateObj;
  let ageInYears = Math.floor(
    ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
  );
  let ageInMonths = Math.floor(
    (ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) /
      (30.44 * 24 * 60 * 60 * 1000)
  );
  let ageInDays = Math.floor(
    (ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );

  // Output the result
  console.log(
    `You are ${ageInYears} years, ${ageInMonths} months, and ${ageInDays} days old.`
  );

  function handleClick(age) {
    setOpen(age ? true : false);
  }
  return (
    <div className="app">
      <Age age={age} setAge={setAge} onClick={handleClick} />
      <Display
        ageInYears={ageInYears}
        ageInMonths={ageInMonths}
        ageInDays={ageInDays}
        open={open}
      />
    </div>
  );
}

function Age({ age, setAge, onClick }) {
  return (
    <div className="age">
      <input
        type="date"
        name=""
        id=""
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={() => onClick(age)}>Calculate</button>
    </div>
  );
}

function Display({ ageInYears, ageInMonths, ageInDays, open }) {
  if (!open) return;
  return (
    <div className="display">
      <div>
        <p>{ageInYears < 10 ? `0${ageInYears}` : ageInYears}</p>
        <span>Years</span>
      </div>
      <div>
        <p>{ageInMonths < 10 ? `0${ageInMonths}` : ageInMonths}</p>
        <span>Months</span>
      </div>
      <div>
        <p>{ageInDays < 10 ? `0${ageInDays}` : ageInDays}</p>
        <span>Days</span>
      </div>
    </div>
  );
}
