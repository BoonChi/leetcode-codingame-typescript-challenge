export class ComputeClosestToZeroTemperature {
  static get(temperatures: number[]): number {
    if (!temperatures.length) return 0;
    return temperatures.reduce((closestValue: number, currentValue: number) => {
      const positiveClosestValue = Math.abs(closestValue);
      if (
        Math.abs(currentValue) < positiveClosestValue ||
        currentValue === positiveClosestValue
      )
        return currentValue;
      return closestValue;
    });
  }
}
