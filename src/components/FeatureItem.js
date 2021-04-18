import React from "react";

import "./FeatureItem.css";

const FeatureItem = ({ text }) => {
  return <li className="feature__item">{text}</li>;
};

export default FeatureItem;
