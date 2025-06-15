import { useState } from "react"
import { useCounter } from "../hooks"
import { useMemo } from "react";


const heavyStock = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
   console.log('go!');

  }
   return `${iterationNumber} realized iterations`
    
}

export const MemoHook = () => {

const [show, setShow] = useState(true);
   const {counter, increment} = useCounter(100);
   const memorizedValue = useMemo(() => heavyStock(counter),[counter] );
  return (
    <>
    <h1>Counter: <small>{counter}</small> </h1>

    <br />

    <h4>{memorizedValue}</h4>

    <button className="btn btn-primary"
    onClick={() => increment()}
    
    > 
        +1
    </button>
    <button  
    className="btn btn-primary"
    onClick={()=> setShow(!show)}
    >Hide/Show {JSON.stringify(show)}</button>


    </>
  )
}
