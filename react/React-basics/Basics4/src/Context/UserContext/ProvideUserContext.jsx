import React, { useState } from "react";
import UserContext from "./CreateContext";

const ProvideUserContext = ({children}) => {
    const [User, setUser] = useState({});
    return (
    <UserContext.Provider value={{User,setUser}}>
        {children}
    </UserContext.Provider>
    )
}
export default ProvideUserContext