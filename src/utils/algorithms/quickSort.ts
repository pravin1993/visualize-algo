import { getOperation, swap } from "@/utils/helper";
import { Operations } from "@enums/operation";

export function* quickSort (arr:number[], start=0, end=arr.length-1) {

    if(start>=end){
        return;
    }
    let pivot = partition(arr, start, end)
    yield getOperation(Operations.PIVOT, )
    quickSort(arr, start, pivot-1)
    quickSort(arr, pivot+1, end)
    console.log(arr)
}


function partition(parr:number[], pStart:number, pEnd:number): number{
    let pivotIndex = pStart
    for (let index = pStart; index < pEnd; index++) {
        if(parr[pEnd]>parr[index]){
            swap(parr, pivotIndex, index)
            pivotIndex++

        }
    }
    swap(parr,pivotIndex, pEnd);
    return pivotIndex
}