import { IHashTable } from './interface';

export const ComputeIndicesFromTwoSum = (
  array: number[],
  target: number
): number[] | null => {
  // less than O(n2) time complexity
  const hashTable: IHashTable = {};
  for (let index = 0; index < array.length; index++) {
    const complement = target - array[index];
    if (complement in hashTable) {
      return [hashTable[complement], index];
    }
    hashTable[array[index]] = index;
  }
  return null;
};
