import React, { createContext, useState } from "react";
interface props {
  children: React.ReactNode;
}
const Context = createContext<any>({ arr: [] });
function ContextProvider({ children }: props) {
  const [arr, setArr] = useState([9, 8, 7, 6, 5, 4, 3, 2, 1]);
  return (
    <Context.Provider
      value={{
        arr,
        setArr
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
export { Context };
