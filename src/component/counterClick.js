import React from 'react'

const CounterClick = (props) => {
    const {count,clickHandler} = props
    return (
        <div>
            <button className="btn btn-primary" onClick={clickHandler}>clicked {count} times!!</button>
        </div>
    )
}

export default CounterClick;