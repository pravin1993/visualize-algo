import React, { useContext, useEffect, useState } from "react";
import NumberComponent from "./NumberComponent";
import { delay } from "../utils/helper";
import { Context } from "./ContextProvider";
import { bubbleStore } from "../utils/algorithms/bubbleSort";
let num1: number|undefined, num2: number|undefined

function Visualizer({toSwap=[], }) {
  const [state, setState] = useState<string>("");
    const {arr: dataArr} = useContext(Context)
  useEffect(() => {
  async function animationHandler(){
    if (toSwap.length === 2) {
      const ele = document.querySelector(
        `[data-id='stylesheet']`
      ) as HTMLStyleElement;
      const animationName = `animate-${(Math.random() * 10000).toFixed(0)}`;
      const rule = `
      @keyframes ${animationName}{
          0% {
              transform: translate(0px, 0px);
          }
        30% {
              transform: translate(0px,-80px);
          }
        90% {
            transform: translate(-${(toSwap[1]-toSwap[0])*56}px,-80px);
        }

          100%{
             transform: translate(-${(toSwap[1]-toSwap[0])*56}px,0px);
          }
      }
  
      `;
  
      const animationStyle = ele.sheet?.insertRule(rule)!;
      console.log(ele.sheet)
      setState(animationName);
      await delay(1100)
      ele.sheet?.deleteRule(animationStyle);
    }
   }
   animationHandler()
    return () => {};
  }, []);
  return (
    <div className="flex justify-center items-center">
      <div className="flex max-sm:max-w-96 border box-border border-cyan-50 max-sm:overflow-scroll">
        {dataArr.map((num, i) => (
         <NumberComponent key={i} value={num} animation={i===num2 ? `1000ms linear forwards ${state}`:""} highlight={i==num1 || i===num2} />
        ))}
      </div>
    </div>
  );
}

export default Visualizer;
