//import { counter } from "@fortawesome/fontawesome-svg-core";
import React, { useState, useEffect } from "react";
function Fitness() {
  const [count, setCount] = useState(0);
  function Increment() {
    setCount(count + 1);
  }
  useEffect(() => {
    //Increment();
  }, []);
  return (
    <div>
      <h1>Fitness</h1>
      <button onClick={Increment} className="btn btn-danger m-3">
        Counter
      </button>
      <h1>{count}</h1>
    </div>
  );
}

export default Fitness;
