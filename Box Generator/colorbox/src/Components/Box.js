import React from "react";

const Box = ({ color }) => {
  const boxColor = {
    backgroundColor: [color],
    width: "100px",
    height: "100px",
    display: "inline-block",
  };
  return <div className="rounded m-2" style={boxColor}></div>;
};

export default Box;