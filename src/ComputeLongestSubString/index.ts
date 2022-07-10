export const computeLongestSubString = (input: string): number => {
  // find the length of substring without repeating characters
  if (input.length === 0) return 0;

  const map1 = new Map();

  let max = 0;
  for (
    let currentIndex = 0, j = 0;
    currentIndex < input.length;
    ++currentIndex
  ) {
    if (map1.has(input.charAt(currentIndex))) {
      j = Math.max(j, map1.get(input.charAt(currentIndex)) + 1);
    }
    map1.set(input.charAt(currentIndex), currentIndex);
    max = Math.max(max, currentIndex - j + 1);
  }
  return max;
};
