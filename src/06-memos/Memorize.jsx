import { useState } from "react"
import { useCounter } from "../hooks"
import { Small } from "./Small"


export const Memorize = () => {

const [show, setShow] = useState(true)
   const {counter, increment} = useCounter(10)
  return (
    <>
    <h1>Counter:  <Small value={counter} /> </h1>

    <br />

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
