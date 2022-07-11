import { isPalindrome } from './index';

describe('isPalindrome', () => {
  describe('return true', () => {
    test('if the input is 121', () => {
      expect(isPalindrome(121)).toBe(true);
    });

    test('if the input is 1001', () => {
      expect(isPalindrome(1001)).toBe(true);
    });

    test('if the input is 0', () => {
      expect(isPalindrome(0)).toBe(true);
    });

    test('if the input is 1', () => {
      expect(isPalindrome(1)).toBe(true);
    });

    test('if the input is 12321', () => {
      expect(isPalindrome(12321)).toBe(true);
    });
  });

  describe('return false', () => {
    test('if the input is -121', () => {
      expect(isPalindrome(-121)).toBe(false);
    });

    test('if the input is 10', () => {
      expect(isPalindrome(10)).toBe(false);
    });

    test('if the input is 1010', () => {
      expect(isPalindrome(1010)).toBe(false);
    });

    test('if the input is 123', () => {
      expect(isPalindrome(123)).toBe(false);
    });
  });
});
