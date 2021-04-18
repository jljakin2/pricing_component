import React from "react";
import Pricing from "./Pricing";
import FreeTrial from "./FreeTrial";

import "./MainCard.css";

const MainCard = () => {
  return (
    <div className="mainCard__container">
      <Pricing />
      <FreeTrial />
    </div>
  );
};

export default MainCard;
