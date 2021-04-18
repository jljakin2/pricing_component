import React from "react";

import "./PageViews.css";

const PageViews = ({ views }) => {
  const abbrNum = num => {
    if (num < 1000000) {
      return Math.round(num / 1000) + "K";
    }

    if (num == 1000000) {
      return Math.round(num / 1000000) + "M";
    }
  };

  return (
    <div className="pageviews__container">
      <h3 className="pageviews__content">
        {abbrNum(views)}
        <span>pageviews</span>
      </h3>
    </div>
  );
};

export default PageViews;
