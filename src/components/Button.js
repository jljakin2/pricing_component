import React from "react";

import "./Button.css";

const Button = ({ text }) => {
  // "text" prop needed to customize text inside button
  return <button>{text}</button>;
};

export default Button;
