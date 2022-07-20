import { sortedArray } from './utility';

export class ComputeMedianSortedArray {
  array1: number[];
  array2: number[];
  constructor(array1: number[], array2: number[]) {
    if (array1.length === 0 && array2.length === 0)
      throw Error('At least one input must not be empty array');
    this.array1 = array1;
    this.array2 = array2;
  }

  compute(): number {
    const mergedSortedArray = sortedArray(this.array1.concat(this.array2));
    const medianIndex = (mergedSortedArray.length - 1) / 2;
    const reminder = (mergedSortedArray.length - 1) % 2;

    if (reminder === 0) {
      return mergedSortedArray[medianIndex];
    }

    const floor = Math.floor(medianIndex);
    const ceil = Math.ceil(medianIndex);

    return (mergedSortedArray[floor] + mergedSortedArray[ceil]) / 2;
  }
}
