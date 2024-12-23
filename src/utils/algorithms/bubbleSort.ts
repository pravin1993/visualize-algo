import { swap } from "../helper";

export function bubbleStore(arrOfNums: number[]) {
  for (let i = 0; i < arrOfNums.length; i++) {
    let swapped = false;
    for (let j = 0; j < arrOfNums.length - i; j++) {
      if (arrOfNums[j] > arrOfNums[j + 1]) {
        swap(arrOfNums, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
}
