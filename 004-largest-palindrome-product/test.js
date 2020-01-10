const largestPalindromeProduct = require('./');

test('004-largest-palindrome-product', () => {
  expect(largestPalindromeProduct(2)).toBe(9009);
  expect(largestPalindromeProduct(3)).toBe(906609);
});

