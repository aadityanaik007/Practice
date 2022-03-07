import React from 'react'
import {CountContext} from '../../App';
import {useContext} from 'react'

export default function Comp1() {
    const countContext = useContext(CountContext);
    return (
        <div>
            <button onClick={()=>countContext.contextDispatch('increment')}>increment</button>
            <button onClick={()=>countContext.contextDispatch('decrement')}>decrement</button>
            <button onClick={()=>countContext.contextDispatch('reset')}>reset</button>
        </div>
    )
}
