import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import LandingComponent from "./component/LandingComponent";
import Visualizer from "./component/visualizer";
import ContextProvider from "./component/ContextProvider";

function App() {
  const [state, setState] = useState(1)
  const reffer = useRef(state)

  useEffect(()=>{
    console.log(reffer, state, "cool");
  })
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
