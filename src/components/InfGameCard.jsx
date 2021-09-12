import React from "react";
import { finishText } from "../helpers/finishText";

const InfGameCard = ({ succesWords, text }) => {
  return (
    <>
      <div className="infGameCard">
        <div className="infCard">
          <img
            src={
              text === finishText.COMPLETED
                ? "./images/complete.png"
                : "./images/no-complete.png"
            }
            alt=""
          />
          <div className="infCard-informationGame">
            <h1>{text}</h1>
            <p>Logros: {succesWords}</p>
          </div>
          <input
            type="button"
            value="Repetir"
            onClick={() => window.location.reload()}
            style={{
              backgroundColor: `${
                text === finishText.COMPLETED
                  ? "var(--succes-color)"
                  : "var(--color-danger)"
              }`,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default InfGameCard;
