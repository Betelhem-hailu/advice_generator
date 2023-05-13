import React from "react";
import "./App.css";
import dividerD from "./assets/pattern-divider-desktop.svg";
import dividerM from "./assets/pattern-divider-mobile.svg";
import dice from "./assets/icon-dice.svg";
import { useState } from "react";



const App = () => {
  const [message, setMessage] = useState([]);

  function handleClick () {
    fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      setMessage(data);
    })
    .catch((err) => console.log(err));
  }

  return (
    <div className="advice__app">
      <div className="advice--box">
      {message.slip && 
            <div>
              <p className="advice__app__head">Advice #{message.slip.id}</p>
              <p className="advice__app__text">{message.slip.advice}</p>
            </div>
           }
        
        <img src={dividerD} alt="divider" className="advice__app__imgD" />
        <img src={dividerM} alt="divider" className="advice__app__imgM" />
      </div>
      <button className="advice__app__icon" onClick={handleClick}>
        <img src={dice} alt="dice" />
      </button>
    </div>
  );
};

export default App;
