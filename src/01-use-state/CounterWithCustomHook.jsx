import React from 'react'
import { useCounter } from '../hooks/UseCounter'

export const CounterWithCustomHook = () => {

    const { counter, increment, reset, decrease } = useCounter();

    return (
        <>

            <h1>Counter with Hook : {counter}</h1>
            <hr />

            <button className='btn btn-primary' onClick={ () =>

                increment(2)
            }>+1</button>
            <button className='btn btn-primary' onClick={()=> reset(2)}>reset</button>
            <button className='btn btn-primary' onClick={() => decrease()}>-1</button>

        </>
    )
}
