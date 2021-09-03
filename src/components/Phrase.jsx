import React from "react";
const Phrase = (props) => {
  return (
    <p>
      {props.children}:{props.name}
    </p>
  );
};
export default Phrase;
