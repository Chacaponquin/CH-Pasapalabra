import axios from "axios";
import { useEffect } from "react";
import Definition from "./components/Definition";
import InfGameCard from "./components/InfGameCard";
import Letters from "./components/Letters";
import Time from "./components/Time";
import { finishText } from "./helpers/finishText";
import { wordsList } from "./helpers/words";
import { useHook } from "./hooks/useHook";
import "./style/pasapalabraStyle.css";

function App() {
  const {
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
  } = useHook();

  useEffect(() => {
    //UBICAR EN POSICION LAS LETRAS
    getEffects();

    //CONSEGUIR LA DEFINICION DE LAS PALABRAS SELECCIONADAS
    const url = "https://api.dictionaryapi.dev/api/v2/entries/es";

    let newWords = words;
    for (let i = 0; i < words.length; i++) {
      let wordRandom = wordsList[newWords[i].letter];
      newWords[i].word =
        wordRandom[Math.floor(Math.random() * wordRandom.length)];

      axios
        .get(`${url}/${newWords[i].word}`)
        .then(({ data }) => {
          newWords[i].definition =
            data[0].meanings[0].definitions[0].definition;
        })
        .catch((err) => console.log(`Hubo un error con ${newWords[i].word}`));
    }
    setWords(newWords);
    setActualWord(newWords[0]);
  }, []);

  return (
    <>
      <Time cuenta={cuenta} start={start} succesWords={succesWords?.length} />
      <div className="letter_container">
        <Letters
          succesWords={succesWords}
          wrongWords={wrongWords}
          passWords={passWords}
        />
        <Definition
          start={start}
          actualWord={actualWord}
          handleSubmitWord={handleSubmitWord}
          setInputValue={setInputValue}
          handlePassWord={handlePassWord}
        />
      </div>
      <div className="puntation_container"></div>
      <audio src="./audio/success.mp3" ref={successAudio}></audio>
      <audio src="./audio/wrong.mp3" ref={wrongAudio}></audio>
      {finishGame && (
        <InfGameCard
          text={
            succesWords?.length === 25
              ? finishText.COMPLETED
              : finishText.NO_COMPLETED
          }
          succesWords={succesWords?.length}
        />
      )}
    </>
  );
}

export default App;
