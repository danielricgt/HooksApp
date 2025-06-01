import { useEffect } from "react"


export const Message = () => {

useEffect(() => {
    console.log('message mounted'); 
    return () => {
        console.log('message nunmounted')
    };
}, []);

  return (
    <>
    
    <h1>Usuario ya  existe</h1>

    </>
  )
}
