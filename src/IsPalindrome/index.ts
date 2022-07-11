// method without using string
// export const isPalindrome = (x: number): boolean => {
// 	// return earlier for those cases must be false
// 	if (x < 0 || (x !== 0 && x % 10 == 0)) return false;
// 	let reverse = 0;

// 	while (x > reverse) {
// 		reverse = reverse * 10 + (x % 10);
// 		x = ~~(x / 10);
// 	}

// 	return x === reverse || x === ~~(reverse / 10);
// };

export const isPalindrome = (x: number): boolean => {
  if (x < 0 || (x !== 0 && x % 10 == 0)) return false;

  const string = x.toString();
  const length = string.length;
  //compare start vs end
  for (let index = 0; index < length; index++) {
    if (string[index] !== string[length - index - 1]) return false;
  }
  return true;
};
