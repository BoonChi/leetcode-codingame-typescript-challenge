class PermutationGame {
  constructor(readonly numberArray: number[]) {
    this.numberArray = numberArray;
  }

  private moves = 0;

  private isIncreasingOrder(inputArray: number[]): boolean {
    return (
      JSON.stringify(inputArray) ===
      JSON.stringify([...inputArray].sort((a, b) => a - b))
    );
  }

  private isDecreasingOrder(inputArray: number[]): boolean {
    return (
      JSON.stringify(inputArray) ===
      JSON.stringify([...inputArray].sort((a, b) => b - a))
    );
  }

  private checkWinner(numberOfMoves: number): string {
    return numberOfMoves % 2 === 0 ? 'Bob' : 'Alice';
  }

  private checkMove(numberArray: number[]): void {
    numberArray.every((currentNumber, index) => {
      if (currentNumber < numberArray[index + 1]) {
        numberArray.splice(index + 1, 1);
        this.moves++;
      }

      if (this.isDecreasingOrder(numberArray)) {
        this.moves = numberArray.length;
        return false;
      }

      if (this.isIncreasingOrder(numberArray)) return false;

      return true;
    });
  }

  compute() {
    const arrayLength = this.numberArray.length;
    if (arrayLength <= 1) return null;

    this.checkMove(this.numberArray);
    return this.checkWinner(this.moves);
  }
}

export { PermutationGame };
