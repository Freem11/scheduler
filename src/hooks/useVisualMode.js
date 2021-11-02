import { useState} from "react";

export default function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]); 


  function transition(nextMode, replace){
    if (replace === true){
    setMode(nextMode)  
    } else {
    setMode(nextMode)   
    setHistory(prev => [...prev, nextMode])
    }
  }

  function back(){
    if(history.length > 1) {
      setHistory(prev => prev.slice(0,-1))
      setMode(history.slice(-2)[0])
    }
  } 


  return { mode, transition, back};


  

};
