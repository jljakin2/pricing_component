import React from "react";

import "./CostPerMonth.css";

const CostPerMonth = ({ checked, price, views }) => {
  return (
    <div className="costPerMonth__container">
      <h1 className="costPerMonth__amount">
        {/* ternary operator used to see if the state of "checked" is true or false and to apply the 25% discount
        depending on the state */}
        {checked
          ? `$${(price - price * 0.25).toFixed(2)}`
          : `$${price.toFixed(2)}`}
      </h1>
      <h3 className="costPerMonth__label"> / month</h3>
    </div>
  );
};

export default CostPerMonth;
