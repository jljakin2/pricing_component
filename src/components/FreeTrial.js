import React from "react";
import Features from "./Features";
import Button from "./Button";

import "./FreeTrial.css";

const FreeTrial = () => {
  return (
    <div className="freeTrial__container">
      <Features />
      <Button text="Start my trial" />
    </div>
  );
};

export default FreeTrial;
