import { useEffect, useRef, useState } from "react";
import { initialWordState } from "../helpers/initialWordState";

export const useHook = () => {
  const [start, setStart] = useState(false);
  const [words, setWords] = useState(initialWordState);
  const [actualWord, setActualWord] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [succesWords, setSuccesWords] = useState([]);
  const [wrongWords, setWrongWords] = useState([]);
  const [passWords, setPassWords] = useState([]);
  const [finishGame, setFinishGame] = useState(false);

  const successAudio = useRef();
  const wrongAudio = useRef();
  const cuenta = useRef();

  useEffect(() => {
    if (start && cuenta.current.innerText > 0) {
      const relojCuentaAtras = () => {
        let cuentaAtras = setTimeout(relojCuentaAtras, 1000);
        cuenta.current.innerText = Number(cuenta.current.innerText) - 1;

        if (Number(cuenta.current.innerText) === 0) {
          clearTimeout(cuentaAtras);

          setFinishGame(true);
        }
      };

      relojCuentaAtras();
    }
  }, [start]);

  const handleSubmitWord = (e) => {
    e.preventDefault();

    //VACIAR LA LISTA DE PALABRAS PASADAS
    if (actualWord.letter === "Z") {
      setPassWords([]);
    }

    if (inputValue.toLowerCase() === actualWord.word) {
      //SI EL NUMERO DE ACIERTOS LLEGA A 25 SE ACABA EL JUEGO
      if (succesWords.length === 25) {
        setSuccesWords([...succesWords, actualWord.letter]);

        setFinishGame(true);
        successAudio.current.play();
      } else {
        setSuccesWords([...succesWords, actualWord.letter]);

        setWords(
          words.map((el) =>
            el.word === actualWord.word ? (el.completed = true) : el
          )
        );
        setActualWord(words.find((el) => el.completed === false));

        //PLAY SUCCESS AUDIO
        successAudio.current.play();
      }
    }

    if (inputValue.toLowerCase() !== actualWord.word) {
      if (wrongWords.length === 25) {
        setWrongWords([...wrongWords, actualWord.letter]);

        setFinishGame(true);
        //PLAY WRONG AUDIO
        wrongAudio.current.play();
      } else {
        setWrongWords([...wrongWords, actualWord.letter]);

        setWords(
          words.map((el) =>
            el.word === actualWord.word ? (el.completed = true) : el
          )
        );
        setActualWord(words.find((el) => el.completed === false));

        //PLAY WRONG AUDIO
        wrongAudio.current.play();
      }
    }

    //RESETEAR EL VALOR DEL INPUT
    setInputValue("");
    document.querySelector(".word_input_container input").value = "";
  };

  const handlePassWord = () => {
    //VACIAR LA LISTA DE PALABRAS PASADAS
    if (actualWord.letter === "Z") {
      setPassWords([]);

      setActualWord(words.find((el) => el.completed === false));
    } else {
      setPassWords([...passWords, actualWord.letter]);

      setActualWord(
        words.find(
          (el) =>
            el.completed === false &&
            el.letter !== actualWord.letter &&
            !passWords.includes(el.letter)
        )
      );
    }
  };

  const getEffects = () => {
    let letras = document.querySelectorAll(".letter");
    let contAnimation = 1;

    //UBICACION DE LETRAS
    for (let i = 0; i < letras.length; i++) {
      letras[i].style.transform = `rotate(${
        (360 / 25) * i
      }deg) translate(12em) rotate(${(360 / 25) * i * -1}deg)`;
    }

    //ANIMACION DE LETRAS
    let j = 19;
    while (contAnimation <= 25) {
      letras[j].style.animationDelay = `${0.2 * contAnimation}s`;

      if (j === 24) {
        j = 0;
      } else {
        j++;
      }

      contAnimation++;
    }

    //EMPIEZA EL CONTEO Y ANIMACION DEL RESTO
    setTimeout(() => {
      setStart(true);
    }, 250 * 25);
  };

  return {
    cuenta,
    successAudio,
    wrongAudio,
    start,
    words,
    actualWord,
    succesWords,
    wrongWords,
    passWords,
    finishGame,
    setWords,
    setActualWord,
    setInputValue,
    handleSubmitWord,
    handlePassWord,
    getEffects,
  };
};
