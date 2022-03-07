import React, { useReducer } from 'react'

const initialState = {
    firstCounter:0,
}
const reducer = (state,action) =>{
    switch (action.mytype) {
        case 'increment':
            return {...state,firstCounter:state.firstCounter+action.value}
        case 'decrement':
            return {...state,firstCounter:state.firstCounter-action.value}
        case 'reset':
            return initialState
        default:
            break;
    }
}

const CounterThree=()=> {
    const [count,dispatch] = useReducer(reducer,initialState);
    const [count2,dispatch2] = useReducer(reducer,initialState);

  return (
    <div className='container d-flex flex-column'>
        <div style={{textAlign:'center',fontWeight:'bold'}}>The count is {count.firstCounter}</div>
        <button className='btn btn-primary' onClick={()=>dispatch({mytype:'increment',value:1})}>Increment COunter by 1</button>
        <button className='btn btn-warning' onClick={()=>dispatch({mytype:'decrement',value:1})}>Decrement COunter by 1</button>
        <button className='btn btn-danger' onClick={()=>dispatch({mytype:'reset'})}>Reset</button>

        <div style={{textAlign:'center',fontWeight:'bold'}}>The count is {count2.firstCounter}</div>
        <button className='btn btn-warning' onClick={()=>dispatch2({mytype:'increment',value:1})}>Increment COunter by 1</button>
        <button className='btn btn-warning' onClick={()=>dispatch2({mytype:'decrement',value:1})}>Decrement COunter by 1</button>
        <button className='btn btn-danger' onClick={()=>dispatch2({mytype:'reset'})}>Reset</button>
    </div>
  )
}


export default CounterThree; 