import { IList } from './interface';

export class ComputeSumOfTwoNumbers {
  list: IList;
  constructor(firstList: number[], secondList: number[]) {
    if (firstList.length <= 0 || secondList.length <= 0)
      throw Error(`The inputs must have two arrays`);

    this.list =
      firstList.length > secondList.length
        ? { firstList: firstList, secondList: secondList }
        : { firstList: secondList, secondList: firstList };
  }

  compute(): number[] {
    const sum = [] as number[];
    this.list.firstList.reduce(
      (
        carry: number,
        currentValue: number,
        currentIndex: number,
        array: number[]
      ) => {
        const nonNullNumber =
          this.list.secondList[currentIndex] === undefined
            ? 0
            : this.list.secondList[currentIndex];
        let sumWithCarry = currentValue + nonNullNumber + carry;
        carry = 0;
        if (sumWithCarry >= 10) {
          sumWithCarry -= 10;
          carry = 1;
        }
        if (carry === 1 && array.length - 1 === currentIndex)
          sum.push(sumWithCarry, carry);
        else sum.push(sumWithCarry);
        return carry;
      },
      0
    );
    return sum;
  }
}
