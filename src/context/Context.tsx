import React, { createContext, useState } from 'react'
export const MyContext:any = createContext(null);
const Context = (props: any) => {
    const [flag, setFlag] = useState<any>(new Set());
    return (
        <MyContext.Provider value={{ flag, setFlag }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default Context
