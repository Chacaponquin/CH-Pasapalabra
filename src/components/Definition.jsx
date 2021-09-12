import React from "react";
import Pass from "./svg/Pass";

const Definition = ({
  start,
  actualWord,
  handleSubmitWord,
  setInputValue,
  handlePassWord,
}) => {
  return (
    <>
      <div className={`significado_container ${start && "show"}`}>
        <h1>{actualWord?.letter}</h1>
        <p>{actualWord?.definition}</p>
        <div className="word_input_container">
          <form onSubmit={handleSubmitWord}>
            <input
              type="text"
              placeholder="Palabra..."
              onChange={(e) => setInputValue(e.target.value)}
              required
            />
          </form>
          <div>
            <Pass
              size={window.innerWidth <= 800 ? 15 : 30}
              handlePassWord={handlePassWord}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Definition;
