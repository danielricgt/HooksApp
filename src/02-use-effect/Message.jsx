import { useState } from "react";
import { useEffect } from "react"


export const Message = () => {

    const [cords, setCords] = useState();
    useEffect(() => {
        //  create the reference 
        const onMouseMove = ({x,y}) =>{
            setCords({x,y});
            console.log(JSON.stringify({x,y}));
        }
        // create an event listener
        window.addEventListener('mousemove', onMouseMove);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }

    }, []);

  return (
    <>
    
    <h1>Usuario ya  existe</h1>
    <h3>{JSON.stringify(cords)}</h3>

    </>
  )
}
