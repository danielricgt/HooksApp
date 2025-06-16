import React from "react";


export const ShowIncrement = React.memo(({ increment }) => {


    console.log('im ShowIncrement component');
    return (
            <button onClick={() => {
                increment()
            }} className="btn btn-primary">
                Incrementar

            </button >

    
    )
})
