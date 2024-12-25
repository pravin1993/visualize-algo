import { Context } from "@/component/ContextProvider";
import { bubbleStore } from "@/utils/algorithms/bubbleSort";
import { Operations } from "@enums/operation";
import { delay } from "@/utils/helper";
import { useContext, useEffect, useRef, useState } from "react";

function useAlgo() {
  const { arr } = useContext(Context);
  const dataArr = useRef([...arr])
  const [swapPositions, setSwapPositions] = useState([-1,-1])
  const [highlightPositions, setHighlightPositions] = useState([-1,-1])
  const sorted = useRef(new Array(dataArr.current.length).fill(false))
  useEffect(()=>{
     async function fetcher(){
    for await (const operation of bubbleStore(dataArr.current, sorted.current)){
        //Resetting the states to remove the highlight to avoid overlapping of highlight and swap animations
        setHighlightPositions([-1, -1]);
        setSwapPositions( [-1, -1]);
        switch(operation.operation){
            case Operations.HIGHLIGHT:{
                setHighlightPositions(operation.positions)
                await delay(1000)
                break;
            }
            case Operations.SWAP:{
                setHighlightPositions(operation.positions)
                setSwapPositions(operation.positions)
                await delay(1000)
                break;
            }
        }
    }
     }

     fetcher()
  },[])
  return {swapPositions, highlightPositions, dataArr: dataArr.current, sorted: sorted.current}
}

export { useAlgo };
