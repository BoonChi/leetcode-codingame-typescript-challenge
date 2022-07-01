import { ComputeClosestToZeroTemperature } from './index';
describe('ComputeClosestToZeroTemperature', () => {
  describe('has empty array', () => {
    it('return 0', () => {
      const tempRange: number[] = [];
      expect(ComputeClosestToZeroTemperature.get(tempRange)).toBe(0);
    });
  });

  describe('has only one element in the array', () => {
    it('should return first element of array', () => {
      const tempRange: number[] = [-273];
      expect(ComputeClosestToZeroTemperature.get(tempRange)).toBe(-273);
    });
  });

  describe('has more than one element in the array', () => {
    it('should return 0', () => {
      const tempRange: number[] = [-273, 0];
      expect(ComputeClosestToZeroTemperature.get(tempRange)).toBe(0);
    });

    it('should return -1', () => {
      const tempRange: number[] = [-273, -7, -7, -1];
      expect(ComputeClosestToZeroTemperature.get(tempRange)).toBe(-1);
    });

    it('should return 1', () => {
      const tempRange: number[] = [273, 7, 7, 1];
      expect(ComputeClosestToZeroTemperature.get(tempRange)).toBe(1);
    });

    it('should return -1 as it is closest to zero', () => {
      const tempRange: number[] = [-273, 5, 7, 8, -1];
      expect(ComputeClosestToZeroTemperature.get(tempRange)).toBe(-1);
    });

    it('should return 5 when pair of same value but has different polarity exists,unsorted array', () => {
      const tempRange: number[] = [-273, 5, 7, 8, -5];
      expect(ComputeClosestToZeroTemperature.get(tempRange)).toBe(5);
    });

    it('should return 5 when pair of same value but has different polarity exists', () => {
      const tempRange: number[] = [-273, -5, 7, 8, 5];
      expect(ComputeClosestToZeroTemperature.get(tempRange)).toBe(5);
    });
  });
});
