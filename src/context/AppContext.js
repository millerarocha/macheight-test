import { createContext, useState } from "react";

/**
 * Context
 */
export const AppContext = createContext();

/**
 * Provider
 */

export function AppProvider({children}){
    const [data,setData] = useState([]);

    const providerValue={
        data,
        setData
    }

    return(
        <AppContext.Provider value={providerValue}>
            {children}
        </AppContext.Provider>
    )

}