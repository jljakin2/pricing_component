import React from "react";

import "./PageViews.css";

const PageViews = ({ views }) => {
  const abbrNum = num => {
    // function used to take the "views" state and render a simplified version of the number for the user.
    // in this case, the number is divided by 1000 if the number is in the 1000s and then we add a "K" to the
    // end to indicate "thousand" as the label. the same logic is applied if the number is equal to 1,000,000 except we divide by
    // 1,000,000 and add an "M" to the end to indicate "million" as the label
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
