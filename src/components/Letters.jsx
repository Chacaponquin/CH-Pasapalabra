import React from "react";

const Letters = ({ succesWords, passWords, wrongWords }) => {
  return (
    <>
      <p
        className={`letter ${succesWords.includes("G") && "acert"} ${
          passWords.includes("G") && "pass"
        } ${wrongWords.includes("G") && "wrong"}`}
      >
        G
      </p>
      <p
        className={`letter ${succesWords.includes("H") && "acert"} ${
          passWords.includes("H") && "pass"
        } ${wrongWords.includes("H") && "wrong"}`}
      >
        H
      </p>
      <p
        className={`letter ${succesWords.includes("I") && "acert"} ${
          passWords.includes("I") && "pass"
        } ${wrongWords.includes("I") && "wrong"}`}
      >
        I
      </p>
      <p
        className={`letter ${succesWords.includes("J") && "acert"} ${
          passWords.includes("J") && "pass"
        } ${wrongWords.includes("J") && "wrong"}`}
      >
        J
      </p>
      <p
        className={`letter ${succesWords.includes("L") && "acert"} ${
          passWords.includes("L") && "pass"
        } ${wrongWords.includes("L") && "wrong"}`}
      >
        L
      </p>
      <p
        className={`letter ${succesWords.includes("M") && "acert"} ${
          passWords.includes("M") && "pass"
        } ${wrongWords.includes("M") && "wrong"}`}
      >
        M
      </p>
      <p
        className={`letter ${succesWords.includes("N") && "acert"} ${
          passWords.includes("N") && "pass"
        } ${wrongWords.includes("N") && "wrong"}`}
      >
        N
      </p>
      <p
        className={`letter ${succesWords.includes("Ñ") && "acert"} ${
          passWords.includes("Ñ") && "pass"
        } ${wrongWords.includes("Ñ") && "wrong"}`}
      >
        Ñ
      </p>
      <p
        className={`letter ${succesWords.includes("O") && "acert"} ${
          passWords.includes("O") && "pass"
        } ${wrongWords.includes("O") && "wrong"}`}
      >
        O
      </p>
      <p
        className={`letter ${succesWords.includes("P") && "acert"} ${
          passWords.includes("P") && "pass"
        } ${wrongWords.includes("P") && "wrong"}`}
      >
        P
      </p>
      <p
        className={`letter ${succesWords.includes("Q") && "acert"} ${
          passWords.includes("Q") && "pass"
        } ${wrongWords.includes("Q") && "wrong"}`}
      >
        Q
      </p>
      <p
        className={`letter ${succesWords.includes("R") && "acert"} ${
          passWords.includes("R") && "pass"
        } ${wrongWords.includes("R") && "wrong"}`}
      >
        R
      </p>
      <p
        className={`letter ${succesWords.includes("S") && "acert"} ${
          passWords.includes("S") && "pass"
        } ${wrongWords.includes("S") && "wrong"}`}
      >
        S
      </p>
      <p
        className={`letter ${succesWords.includes("T") && "acert"} ${
          passWords.includes("T") && "pass"
        } ${wrongWords.includes("T") && "wrong"}`}
      >
        T
      </p>
      <p
        className={`letter ${succesWords.includes("U") && "acert"} ${
          passWords.includes("U") && "pass"
        } ${wrongWords.includes("U") && "wrong"}`}
      >
        U
      </p>
      <p
        className={`letter ${succesWords.includes("V") && "acert"} ${
          passWords.includes("V") && "pass"
        } ${wrongWords.includes("V") && "wrong"}`}
      >
        V
      </p>
      <p
        className={`letter ${succesWords.includes("X") && "acert"} ${
          passWords.includes("X") && "pass"
        } ${wrongWords.includes("X") && "wrong"}`}
      >
        X
      </p>
      <p
        className={`letter ${succesWords.includes("Y") && "acert"} ${
          passWords.includes("Y") && "pass"
        } ${wrongWords.includes("Y") && "wrong"}`}
      >
        Y
      </p>
      <p
        className={`letter ${succesWords.includes("Z") && "acert"} ${
          passWords.includes("Z") && "pass"
        } ${wrongWords.includes("Z") && "wrong"}`}
      >
        Z
      </p>
      <p
        className={`letter ${succesWords.includes("A") && "acert"} ${
          passWords.includes("A") && "pass"
        } ${wrongWords.includes("A") && "wrong"}`}
      >
        A
      </p>
      <p
        className={`letter ${succesWords.includes("B") && "acert"} ${
          passWords.includes("B") && "pass"
        } ${wrongWords.includes("B") && "wrong"}`}
      >
        B
      </p>
      <p
        className={`letter ${succesWords.includes("C") && "acert"} ${
          passWords.includes("C") && "pass"
        } ${wrongWords.includes("C") && "wrong"}`}
      >
        C
      </p>
      <p
        className={`letter ${succesWords.includes("D") && "acert"} ${
          passWords.includes("D") && "pass"
        } ${wrongWords.includes("D") && "wrong"}`}
      >
        D
      </p>
      <p
        className={`letter ${succesWords.includes("E") && "acert"} ${
          passWords.includes("E") && "pass"
        } ${wrongWords.includes("E") && "wrong"}`}
      >
        E
      </p>
      <p
        className={`letter ${succesWords.includes("F") && "acert"} ${
          passWords.includes("F") && "pass"
        } ${wrongWords.includes("F") && "wrong"}`}
      >
        F
      </p>
    </>
  );
};

export default Letters;
