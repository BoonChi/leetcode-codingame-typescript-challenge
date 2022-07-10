import { computeLongestSubString } from './index';

describe('computeLongestSubString', () => {
  describe('has empty string', () => {
    test('return 0', () => {
      expect(computeLongestSubString('')).toBe(0);
    });
  });

  describe('has non-empty string', () => {
    test('return 3', () => {
      expect(computeLongestSubString('abcabcbb')).toBe(3);
    });

    test('return 4', () => {
      expect(computeLongestSubString('abccbauu')).toBe(4);
    });

    test('return 1', () => {
      expect(computeLongestSubString('bbbbb')).toBe(1);
    });

    test('return 3', () => {
      expect(computeLongestSubString('pwwkew')).toBe(3);
    });

    test('return 4', () => {
      expect(computeLongestSubString('abcabczz')).toBe(4);
    });
  });
});
