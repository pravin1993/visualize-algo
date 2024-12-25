import { Operations } from "../enums/operation";

export const delay = (delayTime = 1000) =>
  new Promise((resolve,_) => {
    setTimeout(() => {
      resolve("");
    },delayTime);
  });

export function swap(arr: number[], i: number, j: number){
    console.log("inside swap")
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    // yield* getOperation(Operations.SWAP, [i,j])
}

export function* getOperation(operation: Operations, positions:[number, number]){
    yield {operation, positions}
}