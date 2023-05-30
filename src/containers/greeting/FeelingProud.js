import React, { Component } from "react";
import IMG from "../../assests/images/absho.JPG";

class FeelingProud extends Component {
  render() {
    // const theme = this.props.theme;
    return (
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <img
          src={IMG}
          alt="Feeling Proud"
          style={{
            width: "360.1879px",
            height: "430.68268px",
            borderRadius: "50%",
            marginLeft: "auto",
          }}
        />
      </div>
    );
  }
}

export default FeelingProud;
