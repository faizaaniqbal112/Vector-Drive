import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/button.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Button(props) {
  return (
    <div>
      <button className="btn" onClick={props.onClick}>
        {props.loading ? (
          <CircularProgress
            size={25}
            sx={{
              padding: "0px 22px ",
              marginLeft: "7px",
              "& .MuiCircularProgress-circle": { stroke: "#f4f0dc" },
            }}
          />
        ) : (
          props.text
        )}
      </button>
    </div>
  );
}

export default Button;
