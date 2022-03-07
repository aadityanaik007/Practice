import React from 'react'
import { UserConsumer } from './userContext'

const ComponentC = () => {
  return (
    <UserConsumer>
      {
        (val) => {
          return(
          <div>ComponentC has {val}</div>)
        }
      }
    </UserConsumer>
  )
}
export default ComponentC