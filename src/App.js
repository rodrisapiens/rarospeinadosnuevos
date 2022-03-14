import { useEffect, useState } from "react";
import "./styles/app.css"
import {ReactComponent as Instagram} from './images/Instagram.svg'
import historia from './audio/001_HISTORIA.wav'
import music1 from './audio/002_CLOSE TO THE EDGE(1).wav'
import music2 from './audio/003_RUTA PERDEDORA(1).wav'
import music3 from './audio/004_SUPPERSREADY(1).wav'
import music4 from './audio/005_THE COURT OF THE KRIMSON KING(1).wav'
import { ReactComponent as Pua } from './images/mobile/puaD.svg'
import { ReactComponent as Vinilo } from './images/mobile/ViniloD.svg'
import { ReactComponent as BackGround } from "./images/mobile/FondoD.svg"
import { ReactComponent as Brillo } from "./images/mobile/BrilloD.svg"
import { ReactComponent as BackGroundD } from "./images/desk/h_fondo.svg"
import { ReactComponent as PuaD } from "./images/desk/h_pua.svg"
import { ReactComponent as BrilloD } from "./images/desk/h_brillo.svg"
import { ReactComponent as ViniloD } from "./images/desk/h_vinilo.svg"
const ailin ="https://www.instagram.com/ailinestrella/";
const jupe="https://www.instagram.com/jupe.arrt/";
const dante="https://www.instagram.com/dantefisi/";
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
function HandleContact(e)
{
  const target=e.currentTarget.textContent;
  if(target==="Ailin Estrella")
  window.open(ailin);
  if(target==="Juan Pedro Ramos")
  window.open(jupe);
  if(target==="Dante Fisi")
  window.open(dante);
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
                  {window.innerWidth<600?<Pua className="pua" />:<PuaD className="pua"/>}
                  {window.innerWidth<600?<Vinilo className="vinilo" />:<ViniloD className="vinilo"/>}
                  {window.innerWidth<600?<Brillo className="brillo" />:<BrilloD className="brillo"/>}
                  {window.innerWidth<600?<BackGround className="backGround"/>:<BackGroundD className="backGround"/>}
                  <h1 className="trackDescriber">Now playing: {music}</h1>
                  <div className="contacts">
                    <h1 className="contactTitle">Contacts</h1>
                    <Instagram className="instagram"/>
                    <button className="contact" onClick={HandleContact}>Ailin Estrella</button>
                    <button className="contact" id="jupe" onClick={HandleContact}>Juan Pedro Ramos</button>
                    <button className="contact" onClick={HandleContact}>Dante Fisi</button>
                  </div>
                  {handleMusic(music)}
                </div>:null


      }
    </div>
  );
}

export default App;
