import React from 'react'

const CounterHover = (props) => {
    const {clickHandler,count} = props
    return (
        <div>
            <button className="btn btn-warning" onMouseOver={clickHandler}>clicked {count} times!!</button>
        </div>
    )
}

export default CounterHover;