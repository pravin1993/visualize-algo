import { useEffect, useRef, useState } from "react";
import "./App.css";
import "./index.css";
import Visualizer from "./component/visualizer";
import ContextProvider from "./component/ContextProvider";
import { quickSort } from "./utils/algorithms/quickSort";
import { delay } from "./utils/helper";

function App() {
  const [state, setState] = useState(1)
  const reffer = useRef(state)

  useEffect(()=>{
    console.log(reffer, state, "cool");
  })
//  useEffect(()=>{
//      async function get(){
//          const arr2 = [9,8,7,6,5,4,3,2,1]
//          for await (const op of quickSort(arr2)){
//          console.log(op, arr2 , "op")
//              await delay(300)
         
//          }
//          console.log( arr2 , "use")

//      }
//      get()
//    },[])
  return (
    <main className="w-full h-full m-0 flex justify-center bg-slate-800">
      <ContextProvider>
        <Visualizer />
      </ContextProvider>
    </main>
  );
}

export default App;
