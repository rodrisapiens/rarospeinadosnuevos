import { useEffect, useState } from "react";
import "./styles/app.css"
import vynil from "./images/favpng_phonograph-record-lp-record.png"
import music from './audio/Esos raros peinados nuevos - Charly Garcia (Piano Bar).mp3'
function App() {
  const [response, setResponse] = useState("WE PLAY MUSIC")
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    if (response === "WE PLAY MUSIC") {
      setTimeout(() => {
        setShowButton(true);
      }, 8000)

    }
    if (response === "ROCK") {
      setTimeout(() => {
        setShowButton(true);
      }, 4500)
    }
    if (response === "lets see") {
      setTimeout(() => {
        setResponse("play music")
      }, 3000)
    }

  }
    , [response])
  function handleMusic() {
    let audio = new Audio(music);
    audio.play();
  }

  return (
    <div className="App">
      {
        response === "WE PLAY MUSIC" ?
          <div className="morphing">
            <div className="word">what </div>
            <div className="word">are</div>
            <div className="word">you </div>
            <div className="word">doing?</div>
            {showButton ? <button className="response" onClick={() => { setResponse("ROCK"); setShowButton(false) }}>{response}</button> : null}
          </div>
          : response === "ROCK" ?
            <div className="morphing">
              <div className="secondWords">WHAT </div>
              <div className="secondWords">MUSIC?</div>
              {showButton ? <button className="response" onClick={() => { setResponse("lets see"); setShowButton(false); }}>{response}</button> : null}
            </div>
            : response === "lets see" ?
              <div className="morphing">
                <div className="thirdWords">LETS SEE...</div>
                <div className="thirdWords">LETS SEE...</div>
                <div className="thirdWords">LETS SEE...</div>
              </div>
              : response === "play music" ?
                <div className="play">
                  <h4 className="jp">RAROS PEINADOS NUEVOS - CRAZY NEW HAIRSTYLES</h4>
                  <h5>by Juan Pedro Ramos </h5>
                  <img src={vynil} alt="" className="vynil"></img>
                  {handleMusic()}
                </div>

                : null


      }
    </div>
  );
}

export default App;
