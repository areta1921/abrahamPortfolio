import React, { Component } from "react";

export default class BlogsImg extends Component {
  render() {
    // const theme = this.props.theme;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1100"
        height="700"
        viewBox="0 0 48 48"
      >
        <path
          fill="#673AB7"
          d="M40 7H8c-2.2 0-4 1.8-4 4v26c0 2.2 1.8 4 4 4h5v-1.3c-.6-.3-1-1-1-1.7c0-1.1.9-2 2-2s2 .9 2 2c0 .7-.4 1.4-1 1.7V41h18v-1.3c-.6-.3-1-1-1-1.7c0-1.1.9-2 2-2s2 .9 2 2c0 .7-.4 1.4-1 1.7V41h5c2.2 0 4-1.8 4-4V11c0-2.2-1.8-4-4-4z"
        />
        <g fill="#D1C4E9">
          <circle cx="24" cy="18" r="4" />
          <path d="M31 28s-1.9-4-7-4s-7 4-7 4v2h14v-2z" />
        </g>
      </svg>
    );
  }
}
