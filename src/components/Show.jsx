import React from "react";

const Show = ({ ...props }) => {
  return <div className="div">{props.togl && <h2></h2>}</div>;
};
export default Show;
