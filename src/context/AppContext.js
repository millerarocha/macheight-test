import { createContext, useEffect, useState } from "react";

import { request } from "../utils/request";

/**
 * Context
 */
export const AppContext = createContext();

/**
 * Provider
 */

export function AppProvider({children}){
    const [data,setData] = useState([]);

    useEffect(()=>{
        request()
        .then(res=>res.json())
        .then(data=>setData(data.values))
    },[]);

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