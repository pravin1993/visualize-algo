import { useEffect, useState } from "react";
import NumberComponent from "./NumberComponent";
import { delay, swap } from "@/utils/helper";
function AnimateVisualizerComponent({toSwap=[-1,-1], highlightPositions=[-1,-1],dataArr=[1,2,3,4], sorted=[]}) {
  const [state, setState] = useState<string[]>([]);
  useEffect(() => {
    async function animationHandler() {
      if (toSwap.length === 2) {
        const ele = document.querySelector(
          `[data-id='stylesheet']`
        ) as HTMLStyleElement;
       
        const animationName = `animate-${(Math.random() * 10000).toFixed(0)}`;
        const animationName2 = animationName+'-1'
        const rule = `
      @keyframes ${animationName}{
          0% {
              transform: translate(0px, 0px);
          }
        30% {
              transform: translate(0px,-80px);
          }
        70% {
            transform: translate(${(toSwap[1] - toSwap[0]) * 56}px,-80px);
        }

          100%{
             transform: translate(${(toSwap[1] - toSwap[0]) * 56}px,0px);
          }
      }  
      `;
      const rule2 = `
      @keyframes ${animationName2}{
          0% {
              transform: translate(0px, 0px);
          }
        30% {
              transform: translate(0px,+80px);
          }
        70% {
            transform: translate(${(toSwap[0] - toSwap[1]) * 56}px,+80px);
        }

          100%{
             transform: translate(${(toSwap[0] - toSwap[1])  * 56}px,0px);
          }
      }`
        const animationStyle = ele.sheet?.insertRule(rule)!;
        const animationStyle2 = ele.sheet?.insertRule(rule2)!;
        setState([animationName,animationName2]);
        setTimeout(()=>{
        ele.sheet?.deleteRule(animationStyle);
        ele.sheet?.deleteRule(animationStyle2);
        },2000)      
      }
    }
    animationHandler();
    return () => {};
  }, [toSwap]);
  return (
    <div className="flex justify-center items-center">
      <div className="flex max-sm:max-w-96 border box-border border-cyan-50 max-sm:overflow-x-scroll max-sm:overflow-y-visible">
        {dataArr.map((num: number, i: number) => (
          <NumberComponent
            key={i}
            value={num}
            animation={ (toSwap[0]===i && `1000ms linear forwards ${state[0]}`)||(toSwap[1]===i && `1000ms linear forwards ${state[1]}`)|| ""}
            highlight={highlightPositions.includes(i)}
            isSorted={sorted[i]}
          />
        ))}
      </div>
    </div>
  );
}

export default AnimateVisualizerComponent;
