import { ComputeSumOfTwoNumbers } from './index';

describe('ComputeSumOfTwoNumbers', () => {
  describe('if the list are not array or empty arrays', () => {
    test('throw error', () => {
      const firstList = [] as number[];
      const secondList = [] as number[];
      expect(
        () => new ComputeSumOfTwoNumbers(firstList, secondList)
      ).toThrowError(`The inputs must have two arrays`);
    });
  });

  describe('if the input are non-empty arrays', () => {
    test('return [7,0,8]', () => {
      const firstList = [2, 4, 3];
      const secondList = [5, 6, 4];
      const compute = new ComputeSumOfTwoNumbers(firstList, secondList);
      expect(compute.compute()).toStrictEqual([7, 0, 8]);
    });

    test('return [0]', () => {
      const firstList = [0];
      const secondList = [0];
      const compute = new ComputeSumOfTwoNumbers(firstList, secondList);
      expect(compute.compute()).toStrictEqual([0]);
    });

    test('return [8,9,9,9,0,0,0,1]', () => {
      const firstList = [9, 9, 9, 9, 9, 9, 9];
      const secondList = [9, 9, 9, 9];
      const compute = new ComputeSumOfTwoNumbers(firstList, secondList);
      expect(compute.compute()).toStrictEqual([8, 9, 9, 9, 0, 0, 0, 1]);
    });

    test('return [8,9,9,9,0,0,0,1]', () => {
      const secondList = [9, 9, 9, 9, 9, 9, 9];
      const firstList = [9, 9, 9, 9];
      const compute = new ComputeSumOfTwoNumbers(firstList, secondList);
      expect(compute.compute()).toStrictEqual([8, 9, 9, 9, 0, 0, 0, 1]);
    });
  });
});
