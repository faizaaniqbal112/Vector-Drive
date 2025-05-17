import React from "react";
import "../styles/result.css";
function Result(props) {
  return (
    <div>
      <p>{props.summary}</p>
      <img
        width="100px"
        height="100px"
        src={`https://img.logokit.com/${props.image}?token=${
          import.meta.env.VITE_LOGOKIT_API_KEY
        }`}
      />
    </div>
  );
}

export default Result;
