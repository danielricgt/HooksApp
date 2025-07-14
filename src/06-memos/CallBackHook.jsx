import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"
import { use } from "react";
import { useEffect } from "react";

export const CallBackHook = () => {

    const [counter, setCounter] = useState(0)
    const incrementFather = useCallback(
      (value) => {
        if (typeof value !== 'number') {
            throw new Error('Value must be a number');
          }
       setCounter((c)=> c + value);
      },
      [],
    );

    useEffect(() => {
    }, [incrementFather]);
    

    return (
        <>
            <h1>Use CallBack Hook: {counter}</h1>
            <br />
            <button>

                +1
            </button>

            <ShowIncrement increment={incrementFather}/>

        </>

    )
}
