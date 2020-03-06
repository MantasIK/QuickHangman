import React from "react";
import "./App.css";

function Form({ changeWord, startGame }) {
  return (
    <div className="form">
      <label>What's the secret word? </label>
      <input
        type="text"
        className="form"
        style={{ WebkitTextSecurity: "disc" }}
        onChange={changeWord}
      ></input>
      <button onClick={startGame} className="formButton">
        Get Hanging!{" "}
      </button>
    </div>
  );
}

export default Form;
