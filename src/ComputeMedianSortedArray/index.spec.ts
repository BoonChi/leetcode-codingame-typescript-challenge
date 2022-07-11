import { ComputeMedianSortedArray } from './index';

describe('ComputeMedianSortedArray', () => {
  describe('both inputs have non-empty arrays', () => {
    test('return 2', () => {
      const array1 = [1, 3];
      const array2 = [2];
      const median = new ComputeMedianSortedArray(array1, array2);
      expect(median.compute()).toBe(2);
    });
    test('return 2.5', () => {
      const array1 = [1, 2];
      const array2 = [3, 4];
      const median = new ComputeMedianSortedArray(array1, array2);
      expect(median.compute()).toBe(2.5);
    });
    test('return 2.5', () => {
      const array1 = [1, 4];
      const array2 = [3, 2];
      const median = new ComputeMedianSortedArray(array1, array2);
      expect(median.compute()).toBe(2.5);
    });

    test('return 2.5', () => {
      const array1 = [1, 3];
      const array2 = [3, 2];
      const median = new ComputeMedianSortedArray(array1, array2);
      expect(median.compute()).toBe(2.5);
    });
  });
  describe('at least one input has empty arrays', () => {
    test('return 2', () => {
      const array1 = [1, 3];
      const array2 = [] as number[];
      const median = new ComputeMedianSortedArray(array1, array2);
      expect(median.compute()).toBe(2);
    });
  });
  describe('invalid input', () => {
    test('throw error if both are empty arrays', () => {
      const array1 = [] as number[];
      const array2 = [] as number[];
      expect(() => new ComputeMedianSortedArray(array1, array2)).toThrowError(
        'At least one input must not be empty array'
      );
    });
  });
});
