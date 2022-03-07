import React, { useState, useRef } from 'react'
import ChildTemp from './childTemp';

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const [isDisbaled, setisDisbaled] = useState(false);
  const [clearInt, setclearInt] = useState(false);
  const [count_list, setcount_list] = useState([]);
  const [count_dict, setcount_dict] = useState({ 'count': 0 });

  const si = useRef()

  const addList = (e) => {
    setCount(count + 1);
    // setcount_list([...count_list,count])
    setcount_dict({ ...count_dict, count: count_dict['count'] + 1 })
    setcount_list([{ 'symbol': 'btcusdt', 'bid': 0, 'ask': 1 }, { 'symbol': 'ethusd', 'bid': 2, 'ask': 3 }])
    setisDisbaled(true)

  }
  const sendProp = (clearInt) => {
    console.log(clearInt);
    if (clearInt) {
      setclearInt(true)
      si.current = setInterval(() => {
        const new_countList = count_list.map((item) => {
          return { 'symbol': item.symbol, 'ask': item.ask += 1, 'bid': item.bid += 1 }
        })
        setcount_list(new_countList)
      }, 1000);


    }
    else {
      console.log(clearInt);
      clearInterval(si.current)
    }
  }
  return (
    <div>
      {/* {props.render(count,clickHandler)} */}
      <button disabled={isDisbaled} onClick={(e) => addList(e)}>click it!! {count >= 5 ? '' : count} with list </button>
      <button onClick={() => sendProp(!clearInt)}>click it!! {count >= 5 ? '' : count}</button>
      <ChildTemp list={count_list} />
    </div>
  )
}

export default Counter;