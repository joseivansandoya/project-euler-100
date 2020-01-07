const fiboEvenSum = require('./');

test('002-even-fibonacci-numbers', () => {
  expect(fiboEvenSum(10)).toBe(44);
  expect(fiboEvenSum(18)).toBe(3382);
  expect(fiboEvenSum(23)).toBe(60696);
  expect(fiboEvenSum(43)).toBe(350704366);
  // should return even value
  expect(fiboEvenSum(23) % 2).toBe(0);
});
