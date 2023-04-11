import { createContext, useState } from "react";

export const Accountcontext=createContext(null);


const AppProvider=({children})=>{
   const [account ,setAccount] =useState();
    return(
        <Accountcontext.Provider value={{
            account,
            setAccount
}}>
            {children}
        </Accountcontext.Provider>
    )
}

export default AppProvider