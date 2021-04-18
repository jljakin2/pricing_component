import React from "react";

import "./DiscountToggle.css";

const DiscountToggle = ({ handleDiscountToggle }) => {
  return (
    <div className="discountToggle__container">
      <p className="discountToggle__label">Monthly Billing</p>
      <label>
        <input type="checkbox" className="checkbox" />
        <div
          className="discountToggle__toggleBtn"
          // when toggle button is clicked, we call the prop function from the pricing.js component
          onClick={() => handleDiscountToggle()}>
          <div className="circle"></div>
        </div>
      </label>
      <p className="discountToggle__label">Yearly Billing</p>
    </div>
  );
};

export default DiscountToggle;
