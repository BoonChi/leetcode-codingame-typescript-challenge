import { ComputeFinalPosition } from './index';

describe('ComputeFinalPosition', () => {
  const input = {
    x: 5,
    y: 4,
    initial: [0, 0],
    portalA: [1, 1],
    portalB: [2, 3],
    moves: 'DRR'
  };
  test('teleport once', () => {
    const finalPosition = new ComputeFinalPosition(input).getFinalPosition();
    expect(finalPosition).toStrictEqual([3, 3]);
  });

  test('teleport twice', () => {
    input.moves = 'DRRRLL';
    const finalPosition = new ComputeFinalPosition(input).getFinalPosition();
    expect(finalPosition).toStrictEqual([1, 1]);
  });

  test('it will not move if the movement is out of size', () => {
    input.initial = [input.x, input.y];
    input.moves = 'DRRRLLTT';
    const finalPosition = new ComputeFinalPosition(input).getFinalPosition();
    expect(finalPosition).toStrictEqual([3, 2]);
  });
});
