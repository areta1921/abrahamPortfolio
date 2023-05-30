import React, { Component } from "react";

class FeelingProud extends Component {
  render() {
    // const theme = this.props.theme;
    const imageLink =
      "https://img.freepik.com/premium-photo/ruby-programming-code-background_363039-415.jpg"; // Replace with your image URL
    return (
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <img
          src={imageLink}
          alt="Feeling Proud"
          style={{
            width: "400.1879px",
            height: "500.68268px",
            borderRadius: "25%",
            marginLeft: "auto",
          }}
        />
        {/* Rest of your component code */}
      </div>
    );
  }
}

export default FeelingProud;
