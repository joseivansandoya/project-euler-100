function largestPrimeFactor (number) {
  const primesArr = [];
  for (let i = 2; i <= number / i; i ++) {
    while (number % i === 0) {
      primesArr.push(i);
      number /= i;
    }
  }
  if (number > 1)
    primesArr.push(number);

  return Math.max(...primesArr);
}

module.exports = largestPrimeFactor;
