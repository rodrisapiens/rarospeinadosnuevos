import { useEffect, useState } from "react";
import "./styles/app.css"
function App() {
  const [response, setResponse] = useState("WE PLAY MUSIC")
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    if (response === "WE PLAY MUSIC") {
      setTimeout(() => {
        setShowButton(true);
      }, 8000)

    }
    if(response==="ROCK")
    {
      setTimeout(() => {
        setShowButton(true);
      },4000)
    }

  }
    , [response])

  return (
    <div className="App">
      {
        response === "WE PLAY MUSIC" ?
          <div className="morphing">
            <div className="word">what </div>
            <div className="word">are</div>
            <div className="word">you </div>
            <div className="word">doing?</div>
            {showButton ? <button className="response" onClick={() => { setResponse("ROCK");setShowButton(false) }}>{response}</button> : null}
          </div>
          : response === "ROCK" ?
            <div className="morphing">
              <div className="secondWords">WHAT </div>
              <div className="secondWords">MUSIC?</div>
              {showButton ? <button className="response" onClick={() => { setResponse("WE PLAY MUSIC"); setShowButton(false); }}>{response}</button> : null}
            </div>
            : null
      }
    </div>
  );
}

export default App;
