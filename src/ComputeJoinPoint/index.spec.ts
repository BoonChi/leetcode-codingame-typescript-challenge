import { ComputeJoinPoint } from './index';

describe('ComputeJoinPoint', () => {
  describe('has identical inputs', () => {
    it('return any input', () => {
      const computeJoinPoint = new ComputeJoinPoint(12, 12);
      expect(computeJoinPoint.compute()).toBe(12);
    });
  });

  describe('has different inputs', () => {
    describe('has a join point', () => {
      it('return 519', () => {
        const computeJoinPoint = new ComputeJoinPoint(471, 480);
        expect(computeJoinPoint.compute()).toBe(519);
      });

      it('return 519 even it has unsorted order', () => {
        const computeJoinPoint = new ComputeJoinPoint(480, 471);
        expect(computeJoinPoint.compute()).toBe(519);
      });

      it('return 2 even it has unsorted order', () => {
        const computeJoinPoint = new ComputeJoinPoint(2, 1);
        expect(computeJoinPoint.compute()).toBe(2);
      });

      it('return 620', () => {
        const computeJoinPoint = new ComputeJoinPoint(2, 10);
        expect(computeJoinPoint.compute()).toBe(620);
      });

      it('return 16 with looping through one input', () => {
        const computeJoinPoint = new ComputeJoinPoint(2, 16);
        expect(computeJoinPoint.compute()).toBe(16);
      });

      it('return 19e6 + 1 + 9', () => {
        const computeJoinPoint = new ComputeJoinPoint(19e6, 19e6 + 1 + 9);
        expect(computeJoinPoint.compute()).toBe(19e6 + 1 + 9);
      });

      it('throw error if summation reached limit', () => {
        const num1 = 123;
        const num2 = 470;
        const computeJoinPoint = new ComputeJoinPoint(num1, num2);
        expect(() => computeJoinPoint.compute()).toThrowError(
          `${[num1, num2]} has no join point`
        );
      });

      it('throw error if summation reached limit', () => {
        const num1 = 20e3;
        const num2 = 20e6 + 2 + 6;
        const computeJoinPoint = new ComputeJoinPoint(num1, num2);
        expect(() => computeJoinPoint.compute()).toThrowError(
          `${[num1, num2]} has no join point`
        );
      });
    });
  });
});
