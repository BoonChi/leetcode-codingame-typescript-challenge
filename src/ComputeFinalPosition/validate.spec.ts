import { movesCharacter } from './interface';
import { ValidateInput } from './validate';

describe('ValidateInput', () => {
  describe('detect error', () => {
    const input = {
      x: 20,
      y: 20,
      initial: [1, 1],
      portalA: [1, 1],
      portalB: [1, 1],
      moves: 'TTDDLLRR123'
    };
    describe('validate moves', () => {
      test('throw error if moves has not only specific character', () => {
        expect(() => new ValidateInput(input)).toThrowError(
          `${input.moves} must be string and only consisting of ${movesCharacter}`
        );
      });

      test('shold return the same input', () => {
        input.moves = 'LRDT';
        expect(new ValidateInput(input).input).toBe(input);
      });
    });

    describe('validate y and x', () => {
      test('throw error if x is 0', () => {
        input.x = 0;
        expect(() => new ValidateInput(input)).toThrowError(
          `y: ${input.y} x: ${input.x} must be greater than 0`
        );
      });

      test('throw error if x and y are 0', () => {
        input.x = 8;
        input.y = 0;
        expect(() => new ValidateInput(input)).toThrowError(
          `y: ${input.y} x: ${input.x} must be greater than 0`
        );
      });
    });

    describe('validate initial position,portalA and portalB', () => {
      test('throw error if initial is not an array with two number elements', () => {
        input.initial = [1, '3'] as number[];
        input.x = 20;
        input.y = 20;
        expect(() => new ValidateInput(input)).toThrowError(
          `${input.initial} ${input.portalA} ${input.portalB} must be the array with two number elements`
        );
      });

      test('throw error if portalA or portalB is not within block', () => {
        input.initial = [1, 3];
        input.portalA = [100, 200];
        expect(() => new ValidateInput(input)).toThrowError(
          `${input.portalA} ${input.portalB}  must be within ${input.x} and ${input.y}`
        );
      });

      test('throw error if portalA or portalB is not within block', () => {
        input.portalA = [1, 2];
        input.portalB = [100, 200];
        expect(() => new ValidateInput(input)).toThrowError(
          `${input.portalA} ${input.portalB}  must be within ${input.x} and ${input.y}`
        );
      });
    });
  });
});
