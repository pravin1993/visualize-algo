import { Operations } from "../../enums/operation";
import { getOperation, swap } from "@/utils/helper";

export async function* bubbleStore(arrOfNums: number[], sorted: boolean[]) {
  for (let i = 0; i < arrOfNums.length; i++) {
    let swapped = false;
    for (let j = 0; j < arrOfNums.length - i; j++) {
      yield* getOperation(Operations.HIGHLIGHT, [j, j + 1]);
      if (arrOfNums[j] > arrOfNums[j + 1]) {
        yield* getOperation(Operations.SWAP, [j, j + 1]);
        swap(arrOfNums, j, j + 1);
        swapped = true;
      }
      yield* getOperation(Operations.HIGHLIGHT, [-1, -1]);
    }
    sorted[arrOfNums.length - 1 - i] = true;
    if (!swapped) break;
  }
}
