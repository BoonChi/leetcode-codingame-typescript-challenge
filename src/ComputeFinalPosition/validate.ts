import { IPositionInput, movesCharacter } from './interface';

export class ValidateInput {
  input: IPositionInput;
  constructor(input: IPositionInput) {
    // check number
    if (input.y < 1 || input.x < 1)
      throw Error(`y: ${input.y} x: ${input.x} must be greater than 0`);

    // check the string is within enum Moves
    if (!this.matchSpecificChar(input.moves))
      throw Error(
        `${input.moves} must be string and only consisting of ${movesCharacter}`
      );

    // check if it has array of two number elements
    if (
      !this.validateArray(input.initial) ||
      !this.validateArray(input.portalA) ||
      !this.validateArray(input.portalB)
    )
      throw Error(
        `${input.initial} ${input.portalA} ${input.portalB} must be the array with two number elements`
      );

    // check portalA and portalB is within x and y
    if (!this.checkPortalWithinBlock(input))
      throw Error(
        `${input.portalA} ${input.portalB}  must be within ${input.x} and ${input.y}`
      );

    this.input = input;
  }

  private checkPortalWithinBlock(input: IPositionInput) {
    return (
      input.portalA[0] <= input.x &&
      input.portalB[0] <= input.x &&
      input.portalA[1] <= input.y &&
      input.portalB[1] <= input.y
    );
  }

  private matchSpecificChar(input: string) {
    const pattern = new RegExp(`^[${movesCharacter}]+$`);
    return pattern.test(input);
  }

  private validateArray(array: number[]) {
    // is an array of number
    // only has two element
    return (
      array.every(element => typeof element === 'number') && array.length === 2
    );
  }
}
