import React, { createContext } from 'react'
interface props {
    children: React.ReactNode;
}
const Context = createContext<any>({arr:[]})
function ContextProvider({children}: props) {
    const arr = [9,8,7,6,5,4,3,2,1]
  return (
    <Context.Provider value={{
        arr,
    }}>{children}</Context.Provider>
  )
}

export default ContextProvider
export {Context}