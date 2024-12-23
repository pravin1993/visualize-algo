import { Operations } from "../enums/operation";

export const delay = (delayTime = 1000) =>
  new Promise((resolve,_) => {
    setTimeout(() => {
      resolve("");
    },delayTime);
  });

export function* swap(arr: number[], i: number, j: number):Generator<{operation: Operations, positions:number[]}>{
    yield {operation: Operations.SWAP, positions:[i,j]} ;
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}