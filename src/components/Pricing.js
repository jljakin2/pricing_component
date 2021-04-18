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

    this.getCurrentPrice(value);
  };

  getCurrentPrice = numOfViews => {
    if (numOfViews >= 10000 && numOfViews < 50000) {
      this.setState({ price: 8 });
    }

    if (numOfViews >= 50000 && numOfViews < 100000) {
      this.setState({ price: 12 });
    }

    if (numOfViews >= 100000 && numOfViews < 500000) {
      this.setState({ price: 16 });
    }

    if (numOfViews >= 500000 && numOfViews < 1000000) {
      this.setState({ price: 24 });
    }

    if (numOfViews >= 1000000) {
      this.setState({ price: 36 });
    }
  };

  render() {
    return (
      <div className="pricing__container">
        <div className="pricing__header">
          <PageViews views={this.state.views} />
          <CostPerMonth
            checked={this.state.checked}
            price={this.state.price}
            views={this.state.views}
          />
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
