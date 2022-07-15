export class MaximumSumOfArray {
  maximumSum: number;
  constructor(array: number[]) {
    if (array.length <= 0) throw Error(`Must has at least one element`);
    this.maximumSum = this.check(array);
  }

  private check(array: number[]): number {
    const length = array.length;
    let max = array[0];
    let sum = 0;
    for (let i = 0; i < length; i++) {
      sum += array[i];
      if (sum > max) {
        max = sum;
      }

      if (sum < 0) sum = 0;
    }
    return max;
  }
}
