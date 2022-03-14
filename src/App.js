import { useEffect, useState } from "react";
import "./styles/app.css"
import vynil from "./images/favpng_phonograph-record-lp-record.png"
import historia from './audio/001_HISTORIA.wav'
import music1 from './audio/002_CLOSE TO THE EDGE(1).wav'
import music2 from './audio/003_RUTA PERDEDORA(1).wav'
import music3 from './audio/004_SUPPERSREADY(1).wav'
import music4 from './audio/005_THE COURT OF THE KRIMSON KING(1).wav'
import { ReactComponent as Pua } from './images/mobile/puaD.svg'
import { ReactComponent as Vinilo } from './images/mobile/ViniloD.svg'
import { ReactComponent as BackGround } from "./images/mobile/FondoD.svg"
import { ReactComponent as Brillo } from "./images/mobile/BrilloD.svg"
function App() {
  const [response, setResponse] = useState("WE PLAY MUSIC")
  const [showButton, setShowButton] = useState(false);
  const [music,setMusic]=useState("historia");
  useEffect(() => {
    if (response === "WE PLAY MUSIC") {
      setTimeout(() => {
        setShowButton(true);
      }, 2500)

    }
    if (response === "ROCK") {
      setTimeout(() => {
        setShowButton(true);
      }, 2500)
    }
    if (response === "lets see") {
      setTimeout(() => {
        setResponse("presenting")
      }, 3000)
    }
    if (response === "band photo") {
      setTimeout(() => {
        setResponse("presenting")
      }, 3000)
    }
    if (response === "presenting") {
      setTimeout(() => {
      }, 3000)
    }

  }
    , [response])
  function handleMusic(select) {
    let audio;
    switch (select) {
      case "historia":
        audio = new Audio(historia);
        setTimeout(()=>{
          audio.play();
        },2700)
        audio.onended= function(){
          handleMusic("music1");
          console.log("termine hisotria")
          setMusic("CLOSE TO THE EDGE");
        }
        break;

      case "music1":
        audio = new Audio(music1);
        audio.play();
        audio.onended= function(){
          handleMusic("music2");
          console.log("termine music1")
          setMusic("RUTA PERDEDORA");
        }

        break;

      case "music2":
        audio = new Audio(music2);
        audio.play();
        audio.onended= function(){
          handleMusic("music3");
          setMusic("SUPPERSREADY");

        }
        break;

      case "music3":
        audio = new Audio(music3);
        audio.play();
        audio.onended= function(){
          handleMusic("music4");
          setMusic("THE COURT OF THE KRIMSON KING");
        }
        break;

      case "music4":
        audio = new Audio(music4);
        audio.play();
        audio.onended= function(){
          setResponse("WE PLAY MUSIC");
        }
        break;

      default:

        break;
    }
  }

  return (
    <div className="App">
      {
        response === "WE PLAY MUSIC" ?
          <div className="morphing">
            <div className="word">what are you doing?</div>
            {showButton ? <button className="response" onClick={() => { setResponse("ROCK"); setShowButton(false) }}>{response}</button> : null}
          </div>
          : response === "ROCK" ?
            <div className="morphing">
              <div className="wordOne">WHAT MUSIC?</div>
              {showButton ? <button className="response" onClick={() => { setResponse("lets see"); setShowButton(false); }}>{response}</button> : null}
            </div>
            : response === "lets see" ?
              <div className="morphing">
                <div className="wordTwo">LETS SEE...</div>

              </div>
              : response === "presenting" ?
                <div className="present">
                  <Pua className="pua" />
                  <Vinilo className="vinilo" />
                  <Brillo className="brillo" />
                  <BackGround className="backGround" />
                  <h1 className="trackDescriber">Now playing: {music}</h1>
                  {handleMusic(music)}
                </div>
                : response === "band photo" ?
                  <div className="play">
                    <h4 className="jp">RAROS PEINADOS NUEVOS - CRAZY NEW HAIRSTYLES</h4>
                    <h5>by Juan Pedro Ramos </h5>
                    <img src={vynil} alt="" className="vynil"></img>
                    
                    {handleMusic("historia")}
                  </div>

                  : response==="final"?<h1>el final xd</h1>:null


      }
    </div>
  );
}

export default App;
