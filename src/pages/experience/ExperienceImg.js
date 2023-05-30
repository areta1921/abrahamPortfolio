import React, { Component } from "react";

class FeelingProud extends Component {
  render() {
    // const theme = this.props.theme;
    const imageLink =
      "https://koenig-media.raywenderlich.com/uploads/2020/03/unity-scene-to-use-for-import.png"; // Replace with your image URL
    return (
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <img
          src={imageLink}
          alt="Feeling Proud"
          style={{
            width: "380.1879px",
            height: "700.68268px",
            borderRadius: "15%",
            marginLeft: "auto",
          }}
        />
        {/* Rest of your component code */}
      </div>
    );
  }
}

export default FeelingProud;
