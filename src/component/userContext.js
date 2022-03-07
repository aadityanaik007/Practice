import React from 'react'

const UserContext = React.createContext('ramification')

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;
export {UserProvider,UserConsumer}