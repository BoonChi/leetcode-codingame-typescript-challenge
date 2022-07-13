import { ArrayHasDuplication } from './index';

describe('ArrayHasDuplication', () => {
  describe('has empty array', () => {
    it('returns false', () => {
      const compute = new ArrayHasDuplication([]);
      expect(compute.result).toBe(false);
    });
  });

  describe('has non-empty number array input', () => {
    it('returns true', () => {
      const compute = new ArrayHasDuplication([1, 4, 2, 12, 1]);
      expect(compute.result).toBe(true);
    });

    it('returns false', () => {
      const compute = new ArrayHasDuplication([1, 4, 2, 12, 16]);
      expect(compute.result).toBe(false);
    });

    it('returns true', () => {
      const compute = new ArrayHasDuplication([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
      expect(compute.result).toBe(true);
    });
  });

  describe('has non-empty string array input', () => {
    it('returns true', () => {
      const compute = new ArrayHasDuplication(['a', 'b', 'a']);
      expect(compute.result).toBe(true);
    });

    it('returns false', () => {
      const compute = new ArrayHasDuplication(['a', 'ab', 'b']);
      expect(compute.result).toBe(false);
    });
  });
});
