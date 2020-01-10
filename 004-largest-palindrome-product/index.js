function isPalindrome(number) {
  return number == [...String(number)].reverse().join('');
}

function largestPalindromeProduct(n) {
  const maxFactor = Math.pow(10, n) - 1;
  const minFactor = (maxFactor + 1) / 10;
  const palindromes = [];

  for (let i = maxFactor; i >= minFactor; i --) {
    for (let j = maxFactor; j >= minFactor; j --) {
      const result = i * j;
      if (isPalindrome(result)) {
        palindromes.push(result);
        break;
      }
    }
  }

  return Math.max(...palindromes);
}

module.exports = largestPalindromeProduct;
