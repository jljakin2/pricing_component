import React from "react";
import FeatureItem from "./FeatureItem";

import "./Features.css";

const Features = () => {
  return (
    <ul className="features__list">
      {/* if this was a larger app, we would want to maintain the data to customize the FeatureItem component
      outside of this component and then map in the rendered results */}
      <FeatureItem text="Unlimited websites" />
      <FeatureItem text="100% data ownership" />
      <FeatureItem text="Email reports" />
    </ul>
  );
};

export default Features;
