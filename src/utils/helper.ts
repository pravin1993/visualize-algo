import { OperationPositions, PositionPair } from "@/types/types";
import { Operations } from "../enums/operation";

export const delay = (delayTime = 1000) =>
  new Promise((resolve,_) => {
    setTimeout(() => {
      resolve("");
    },delayTime);
  });

export function swap(arr: number[], i: number, j: number){
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    // yield* getOperation(Operations.SWAP, [i,j])
}



export function* getOperation<T extends Operations>(operation: Operations, positions:OperationPositions[T]): Generator<{ operation: Operations; positions: OperationPositions[T] }>{
    yield {operation, positions}
}