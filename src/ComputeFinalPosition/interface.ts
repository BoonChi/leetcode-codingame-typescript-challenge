export type IPositionInput = {
  x: number;
  y: number;
  initial: number[];
  portalA: number[];
  portalB: number[];
  moves: string;
};

export const movesCharacter = 'TDLR';

export type IMovement = {
  x: number;
  y: number;
};

export const movement: { [key: string]: IMovement } = {
  T: { x: 0, y: -1 },
  D: { x: 0, y: 1 },
  L: { x: -1, y: 0 },
  R: { x: 1, y: 0 }
};
