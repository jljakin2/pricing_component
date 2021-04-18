import React from "react";
import PageViews from "./PageViews";
import CostPerMonth from "./CostPerMonth";
import Slider from "./Slider";
import DiscountToggle from "./DiscountToggle";

import "./Pricing.css";

class Pricing extends React.Component {
  // * state is kept in this component in order to be shared with child components and so every component
  // * is aware of the state should it need to be shared
  state = { checked: false, price: 16, views: 100000 };

  handleDiscountToggle = () => {
    // method that is passed to the DiscountToggle component in order to detect if the toggle button is clicked
    // so we can change the state of "checked" in order to apply the 25% discount or not
    this.setState({ checked: !this.state.checked });
  };

  handleSliderChange = value => {
    // method used to monitor changes in the Slider component (specifically the range input in that component).
    // every time the slider changes, this function will change the state of the views and then call "getCurrentPrice()"
    // to change the state of the price depending on the range where views currently is
    // * There is probably a more efficient way to handle the slider change so we aren't updating state after every
    // * minor increment
    this.setState({ views: value });

    this.getCurrentPrice(value);
  };

  getCurrentPrice = numOfViews => {
    // method that gets called whenever the Slider component is changed. This method takes the current state of
    // the number of views the slider represents and checks it against a series of ranges to determine which pricing
    // tier should be applied. then the "price" state is updated accordingly
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
          <Slider
            handleSliderChange={this.handleSliderChange}
            views={this.state.views}
          />
        </div>
        <DiscountToggle handleDiscountToggle={this.handleDiscountToggle} />
      </div>
    );
  }
}

export default Pricing;
