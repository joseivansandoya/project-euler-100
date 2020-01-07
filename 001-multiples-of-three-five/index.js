function multiplesOf3and5(number) {
  const multiples = [];
  for (let i = 0; i < number; i ++) {
    if (i % 3 === 0 || i % 5 === 0)
      multiples.push(i);
  }
  return multiples.reduce((acc, cur) => acc + cur, 0);
}

module.exports = multiplesOf3and5;
