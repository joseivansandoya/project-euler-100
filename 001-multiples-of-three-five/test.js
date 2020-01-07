const multiplesOf3and5 = require('./');

test('001-multiples-of-three-five', () => {
  expect(multiplesOf3and5(1000)).toBe(233168);
  expect(multiplesOf3and5(49)).toBe(543);
  expect(multiplesOf3and5(19564)).toBe(89301183);
  expect(multiplesOf3and5(8456)).toBe(16687353);
});
