import React from 'react'
import { useContext } from 'react'

import { CountContext } from '../../App';

export default function Comp2() {
    const countContext = useContext(CountContext)

    return (
        <div>
            <div>Comp2</div>
            <button onClick={()=>countContext.contextDispatch('increment')}>increment</button>
            <button onClick={()=>countContext.contextDispatch('decrement')}>decrement</button>
            <button onClick={()=>countContext.contextDispatch('reset')}>reset</button>
        </div>
    )
}
