import { MaximumSumOfArray } from './index';

describe('MaximumSumOfArray', () => {
  describe('has empty array', () => {
    it('throws error', () => {
      expect(() => new MaximumSumOfArray([])).toThrowError(
        `Must has at least one element`
      );
    });
  });

  describe('has non-empty array', () => {
    it('returns 1', () => {
      const result = new MaximumSumOfArray([1]);
      expect(result.maximumSum).toBe(1);
    });

    it('returns -1', () => {
      const result = new MaximumSumOfArray([-2, -1]);
      expect(result.maximumSum).toBe(-1);
    });

    it('returns 0', () => {
      const result = new MaximumSumOfArray([-1, 0, -2]);
      expect(result.maximumSum).toBe(0);
    });

    it('returns 21', () => {
      const result = new MaximumSumOfArray([8, -19, 5, -4, 20]);
      expect(result.maximumSum).toBe(21);
    });

    it('returns 3', () => {
      const result = new MaximumSumOfArray([-1, -2, -3, 3]);
      expect(result.maximumSum).toBe(3);
    });

    it('returns 23', () => {
      const result = new MaximumSumOfArray([5, 4, -1, 7, 8]);
      expect(result.maximumSum).toBe(23);
    });

    it('returns 6', () => {
      const result = new MaximumSumOfArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
      expect(result.maximumSum).toBe(6);
    });
  });
});
