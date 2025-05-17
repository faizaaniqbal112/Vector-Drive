import React, { use, useState } from "react";
import ReactDOM from "react-dom";
import Input from "./Input.jsx";
import Button from "./Button.jsx";
import Result from "./Result.jsx";
import carSearch from "../server/openAICall.js";
import "../styles/app.css";

function App() {
  const [transmission, setTransmission] = useState("");
  const [engineSize, setEngineSize] = useState("");
  const [bodyStyle, setBodyStyle] = useState("");
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [isAsked, setIsAsked] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    console.log("clicked");
    setLoading(true);

    // Combine the answers from the text areas
    const combineAns = `${transmission} | ${engineSize} L | ${bodyStyle} | ${description}`;

    // Wait for the result of the movie search
    const output = await carSearch(combineAns);

    setIsAsked(true);

    setSummary(output.output);
    setImage(output.image);
  }

  function backClick() {
    setTransmission("");
    setEngineSize("");
    setDescription("");
    setBodyStyle("");
    setIsAsked(false);
    setLoading(false);
  }

  return (
    <div className="container">
      {!isAsked ? (
        <>
          <h1>VectorDrive</h1>
          <Input
            placeholder="Enter Transmission..."
            name="carTransission"
            value={transmission}
            onChange={setTransmission}
          />
          <Input
            placeholder="Enter Engine Size..."
            name="carEngineSize"
            value={engineSize}
            onChange={setEngineSize}
          />
          <Input
            placeholder="Enter Body Style..."
            name="carBodyStyle"
            value={bodyStyle}
            onChange={setBodyStyle}
          />
          <Input
            placeholder="Enter a short description..."
            name="carDescription"
            value={description}
            onChange={setDescription}
          />
          <Button text="Find a Car" onClick={handleClick} loading={loading} />
        </>
      ) : (
        <>
          <h1>VectorDrive</h1>
          <Result summary={summary} image={image} />
          <Button text="Go Back" onClick={backClick} />
          <a href="https://logokit.com" title="Logo API">
            Logos provided by LogoKit.com
          </a>
        </>
      )}
    </div>
  );
}

export default App;
