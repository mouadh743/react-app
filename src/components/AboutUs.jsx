import React, { useState, useEffect } from "react";
import CountNumber from "./CountNumber";
import Show from "./Show";
const AboutUs = () => {
  const [togle, setTogle] = useState(false);
  const myFun = () => {
    setTogle(!togle);
  };
  return (
    <div>
      <h1 className="m-3">How we are:</h1>
      <button onClick={myFun}>add</button>
      <Show togl={togle}>Show</Show>
    </div>
  );
};
export default AboutUs;
