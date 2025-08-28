import React, { useEffect, useState } from 'react'

export default function TimerToggle() {
    const[seconds, setSeconds] = useState(0);
    const[running, setRunning] = useState(false);

    React.useEffect(()=> {
        let interval;
        if(running) {
            interval = setInterval(()=>setSeconds(s => s+1),1000);
        }
        return() => clearInterval(interval);
    }, [running]);
  return (
    <>
    <h2>{seconds}s</h2>
    <button onClick={()=> setRunning(!running)}>{running ? "Pause" : "Start" }</button>
    </>
  )
}
