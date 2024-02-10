import { useState } from "react"

export function Counter(){
    const [counter,setCounter]=useState(0)
    function handleIncrementButton() {
        setCounter(prevValue => prevValue + 1);
    }
    
    
    return (
        <div>
            <h2>I've Counted to {counter}</h2>
            <button onClick={handleIncrementButton}>Increment</button>
              
             </div>
    )
    }