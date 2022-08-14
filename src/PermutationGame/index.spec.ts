import { PermutationGame } from './index';

describe('PermutationGame', () => {
  describe('has single array or empty element', () => {
    it('return null as it has empty array', () => {
      const array = [] as number[];
      const game = new PermutationGame(array);
      expect(game.compute()).toBe(null);
    });

    it('return null as it has single element array', () => {
      const array = [1] as number[];
      const game = new PermutationGame(array);
      expect(game.compute()).toBe(null);
    });
  });

  describe('has more than single array element', () => {
    it('return Alice as input : [1, 3, 2]', () => {
      const array = [1, 3, 2];
      const game = new PermutationGame(array);
      expect(game.compute()).toBe('Alice');
    });

    it('return Bob as input : [5, 1, 3, 2, 4]', () => {
      const array = [5, 1, 3, 2, 4];
      const game = new PermutationGame(array);
      expect(game.compute()).toBe('Bob');
    });

    it('return Bob as input : [5, 3, 2, 1, 4]', () => {
      const array = [5, 3, 2, 1, 4];
      const game = new PermutationGame(array);
      expect(game.compute()).toBe('Bob');
    });

    it('return Bob as input : [5, 3, 2, 1, 4]', () => {
      const array = [5, 3, 2, 1, 4];
      const game = new PermutationGame(array);
      expect(game.compute()).toBe('Bob');
    });

    it('return Bob as input : [4 2 3 1 6 5]', () => {
      const array = [4, 2, 3, 1, 6, 5];
      const game = new PermutationGame(array);
      expect(game.compute()).toBe('Bob');
    });
  });
});
