export class ArrayHasDuplication {
  result: boolean;
  constructor(array: string[] | number[]) {
    this.result = this.compute(array);
  }

  private compute(array: string[] | number[]): boolean {
    const set = new Set<number | string>();
    for (let index = 0; index < array.length; index++) {
      if (set.has(array[index])) {
        return true;
      }
      set.add(array[index]);
    }
    return false;
  }
}
