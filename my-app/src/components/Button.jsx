import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/button.css";

function Button(props) {
  return (
    <div>
      <button className="btn" onClick={props.onClick}>
        {props.text}{" "}
      </button>
    </div>
  );
}

export default Button;
