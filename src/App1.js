import React, { useReducer } from 'react'
import Counter from './component/counter';
import CounterHover from './component/counterHover';
import CounterClick from './component/counterClick';
import { UserProvider } from './component/userContext';
import ComponentC from './component/componentC';
import CounterThree from './component/counterThree';
import Comp1 from './component/contextReducer/comp1';
import Comp2 from './component/contextReducer/comp2';
import Comp3 from './component/contextReducer/comp3';

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      console.log('increment');
      return state + 1
    case 'decrement':
      console.log('decrement');
      return state - 1
    case 'reset':
      console.log('reset');
      return initialState
    case 'default':
      return state
  }
}
const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <Counter render={(count,clickHandler)=><CounterClick count={count} clickHandler={clickHandler}/>}/>
      <Counter render={(count,clickHandler)=><CounterHover count={count} clickHandler={clickHandler}/>}/>
      <UserProvider value="Vishwas">
        <ComponentC/>
      </UserProvider>
      {/* <CounterThree/> */}
      {/* <div className="container">
        <h1>Count Value:====== {count}</h1>
        <CountContext.Provider value={{contextcount:count,contextDispatch:dispatch}} >
            <Comp1/>
            <Comp2/>
            <Comp3/>
        </CountContext.Provider>
      </div>

      <Counter />
    </div>
  )
}

export default App;