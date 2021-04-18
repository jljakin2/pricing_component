import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="header__container">
      <h1 className="header__title">Simple, traffic-based pricing</h1>
      <p className="header__sub-title">
        Sign-up for our 30-day trial. No credit card required.
      </p>
    </div>
  );
};

export default Header;
