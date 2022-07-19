export function findShortestSubArray(numbers: number[]): number {
  //count the highest frequency
  //find the possible shortest length
  if (numbers.length === 0) return 0;
  let maxFrequency = 0;
  let shortestLength = 1;
  const map = new Map<number, number[]>();
  for (let index = 0; index < numbers.length; index++) {
    const repeatedNumber = map.get(numbers[index]);
    if (repeatedNumber !== undefined) {
      repeatedNumber[0] += 1;
      repeatedNumber[2] = index;
      if (repeatedNumber[0] > maxFrequency) {
        maxFrequency = repeatedNumber[0];
        shortestLength = repeatedNumber[2] - repeatedNumber[1] + 1;
      } else if (repeatedNumber[0] === maxFrequency) {
        shortestLength = Math.min(
          shortestLength,
          repeatedNumber[2] - repeatedNumber[1] + 1
        );
      }
    } else {
      map.set(numbers[index], [1, index]);
    }
  }
  return shortestLength;
}
