import { findShortestSubArray } from './index';
describe('findShortestSubArray', () => {
  describe('has empty array', () => {
    it('returns 0', () => {
      expect(findShortestSubArray([])).toBe(0);
    });
  });

  describe('has non-empty array', () => {
    it('returns 2 when the input is [1,2,2,3,4,1]', () => {
      const numbers = [1, 2, 2, 3, 4, 1];
      expect(findShortestSubArray(numbers)).toBe(2);
    });

    it('returns 6 when the input is [1,2,2,3,4,1,2]', () => {
      const numbers = [1, 2, 2, 3, 4, 1, 2];
      expect(findShortestSubArray(numbers)).toBe(6);
    });

    it('returns 9 when the input is [1,1,2,3,4,1,2,5,1]', () => {
      const numbers = [1, 1, 2, 3, 4, 1, 2, 5, 1];
      expect(findShortestSubArray(numbers)).toBe(9);
    });

    it('returns 1 when the input is [2,1]', () => {
      const numbers = [2, 1];
      expect(findShortestSubArray(numbers)).toBe(1);
    });
  });
});
