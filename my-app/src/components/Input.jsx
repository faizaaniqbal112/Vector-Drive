import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/input.css";

function Input(props) {
  return (
    <div>
      <input
        type="text"
        autocomplete="off"
        name={props.name}
        id="input"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
}

export default Input;
