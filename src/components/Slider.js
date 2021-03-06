import React from "react";

import "./Slider.css";

class Slider extends React.Component {
  handleChange = e => {
    // calls back to the Pricing component in order to update state for the number of views
    this.props.handleSliderChange(e.target.value);
  };

  render() {
    return (
      <div className="slider__container">
        <input
          type="range"
          min={0}
          max={1000000}
          value={this.props.views}
          step={10000}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Slider;
