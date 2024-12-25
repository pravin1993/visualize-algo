import { useEffect, useRef, useState } from "react";
import "./App.css";
import "./index.css";
import Visualizer from "./component/visualizer";
import ContextProvider from "./component/ContextProvider";
import { quickSort } from "./utils/algorithms/quickSort";

function App() {
  const [state, setState] = useState(1)
  const reffer = useRef(state)

  useEffect(()=>{
    console.log(reffer, state, "cool");
  })
  useEffect(()=>{
    quickSort([9,1,8,2,7,3,6,4]);
  },[])
  return (
    <main className="w-full h-full m-0 flex justify-center bg-slate-800">
      <ContextProvider>
        <Visualizer />
        <button onClick={()=>{setState(p=>p+1)}}>Change {state}</button>
      </ContextProvider>
    </main>
  );
}

export default App;
