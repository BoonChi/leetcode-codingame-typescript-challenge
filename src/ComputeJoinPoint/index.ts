export class ComputeJoinPoint {
  min: number;
  max: number;

  constructor(num1: number, num2: number) {
    this.min = num1 < num2 ? num1 : num2;
    this.max = num1 > num2 ? num1 : num2;
  }

  private sumOfDigits(num: number) {
    return num
      .toString()
      .split('')
      .reduce((acc: number, current: string) => {
        return acc + parseInt(current);
      }, num);
  }

  public compute(): number {
    if (this.min === this.max) return this.min;

    const limit = 20e6;

    // start add the smaller summation until it is greater than bigger summation
    let sumOfMin = this.min;
    let sumOfMax = this.max;

    while (sumOfMin < limit && sumOfMax < limit) {
      if (sumOfMin > sumOfMax) {
        while (sumOfMax < sumOfMin) {
          sumOfMax = this.sumOfDigits(sumOfMax);
          if (sumOfMax === sumOfMin) return sumOfMin;
        }
      }
      sumOfMin = this.sumOfDigits(sumOfMin);
      if (sumOfMax === sumOfMin) return sumOfMin;
    }
    throw Error(`${[this.min, this.max]} has no join point`);
  }
}
