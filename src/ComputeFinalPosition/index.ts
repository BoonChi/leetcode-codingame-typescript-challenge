import { IPositionInput, movement } from './interface';
import { ValidateInput } from './validate';

export class ComputeFinalPosition {
  input: IPositionInput;
  constructor(input: IPositionInput) {
    // validate input
    this.input = new ValidateInput(input).input;
  }

  getFinalPosition(): number[] {
    return this.input.moves
      .split('')
      .reduce((finalPosition: number[], currentMove: string) => {
        if (
          finalPosition[0] <= this.input.x &&
          finalPosition[1] <= this.input.y
        ) {
          // if the next position is not PortalA or PortalB
          const nextPositionX = finalPosition[0] + movement[currentMove].x;
          const nextPositionY = finalPosition[1] + movement[currentMove].y;
          finalPosition = [
            nextPositionX < 0 || nextPositionX > this.input.x
              ? finalPosition[0]
              : nextPositionX,
            nextPositionY < 0 || nextPositionY > this.input.y
              ? finalPosition[1]
              : nextPositionY
          ];

          if (
            JSON.stringify(finalPosition) === JSON.stringify(this.input.portalA)
          ) {
            finalPosition = this.input.portalB;
          } else if (
            JSON.stringify(finalPosition) === JSON.stringify(this.input.portalB)
          ) {
            finalPosition = this.input.portalA;
          }
        }
        return finalPosition;
      }, this.input.initial);
  }
}
