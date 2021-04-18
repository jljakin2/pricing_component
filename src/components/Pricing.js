import React from "react";
import PageViews from "./PageViews";
import CostPerMonth from "./CostPerMonth";
import Slider from "./Slider";
import DiscountToggle from "./DiscountToggle";

import "./Pricing.css";

class Pricing extends React.Component {
  state = { checked: false, price: 16, views: 100000 };

  handleDiscountToggle = () => {
    this.setState({ checked: !this.state.checked });
  };

  handleSliderChange = value => {
    this.setState({ views: value });
  };

  render() {
    return (
      <div className="pricing__container">
        <div className="pricing__header">
          <PageViews views={this.state.views} />
          <CostPerMonth checked={this.state.checked} price={this.state.price} />
        </div>
        <Slider
          handleSliderChange={this.handleSliderChange}
          views={this.state.views}
        />
        <DiscountToggle handleDiscountToggle={this.handleDiscountToggle} />
      </div>
    );
  }
}

export default Pricing;
