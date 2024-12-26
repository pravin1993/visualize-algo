import { PositionPair } from "@/types/types";
import { delay, getOperation, swap } from "@/utils/helper";
import { Operations } from "@enums/operation";

export async function* quickSort(
  arr: number[],
  start = 0,
  end = arr.length - 1
): AsyncGenerator<{ operation: Operations; positions: number | PositionPair }> {
  if (start >= end) {
    return;
  }
  let pivot = yield* partition(arr, start, end);
  yield* getOperation(Operations.PIVOT, pivot);
  yield* quickSort(arr, start, pivot - 1);
  yield* quickSort(arr, pivot + 1, end);
}

async function* partition(
  parr: number[],
  pStart: number,
  pEnd: number
): AsyncGenerator<{ operation: Operations; positions: number | PositionPair }> {
  let pivotIndex = pStart;
  for (let index = pStart; index < pEnd; index++) {
    yield* getOperation(Operations.HIGHLIGHT, [pEnd, index]);
    if (parr[pEnd] > parr[index]) {
        if(pivotIndex !== index){
      yield* getOperation(Operations.SWAP, [pivotIndex, index])
      swap(parr, pivotIndex, index);
    }
      pivotIndex++;
    }
  }
  yield* getOperation(Operations.SWAP, [pivotIndex, pEnd]);
  swap(parr, pivotIndex, pEnd);
  return pivotIndex;
}
