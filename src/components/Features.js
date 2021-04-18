import React from "react";
import FeatureItem from "./FeatureItem";

import "./Features.css";

const Features = () => {
  return (
    <ul className="features__list">
      <FeatureItem text="Unlimited websites" />
      <FeatureItem text="100% data ownership" />
      <FeatureItem text="Email reports" />
    </ul>
  );
};

export default Features;
