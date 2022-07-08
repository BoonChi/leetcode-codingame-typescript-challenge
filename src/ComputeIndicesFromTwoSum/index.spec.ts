import { ComputeIndicesFromTwoSum } from './index';

describe('ComputeIndicesFromTwoSum', () => {
  describe('has no pair', () => {
    test('return null', () => {
      const numbers = [3, 1, 3];
      const target = 5;
      expect(ComputeIndicesFromTwoSum(numbers, target)).toStrictEqual(null);
    });
  });
  describe('when twoSum is from two elements who are next to each other', () => {
    test('return [0,1]', () => {
      const numbers = [2, 7, 11, 15];
      const target = 9;
      expect(ComputeIndicesFromTwoSum(numbers, target)).toStrictEqual([0, 1]);
    });

    test('return [1,2]', () => {
      const numbers = [3, 2, 4];
      const target = 6;
      expect(ComputeIndicesFromTwoSum(numbers, target)).toStrictEqual([1, 2]);
    });

    describe('has repeated numbers', () => {
      test('return [0,1]', () => {
        const numbers = [3, 3];
        const target = 6;
        expect(ComputeIndicesFromTwoSum(numbers, target)).toStrictEqual([0, 1]);
      });
    });
  });

  describe('when twoSum is NOT from two elements who are next to each other', () => {
    test('return [0,3]', () => {
      const numbers = [3, 2, 1, 4, 8, 7];
      const target = 7;
      expect(ComputeIndicesFromTwoSum(numbers, target)).toStrictEqual([0, 3]);
    });
    describe('has repeated numbers', () => {
      test('return [0,2]', () => {
        const numbers = [3, 2, 3];
        const target = 6;
        expect(ComputeIndicesFromTwoSum(numbers, target)).toStrictEqual([0, 2]);
      });
    });
  });
});
