import React from "react";

const CounterNumber = ({ arr }) => {
  return (
    <div>
      <h1>CountNumber</h1>
      {arr.map((item, index) => (
        <li key={index}>{item} </li>
      ))}
    </div>
  );
};
export default CounterNumber;
