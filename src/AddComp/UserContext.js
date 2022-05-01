
import React from "react";

const UserContext =
    React.createContext('Code Evolution') //default value

const UserP = UserContext.Provider
const UserC = UserContext.Consumer

export { UserC, UserP }