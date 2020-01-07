const memo = {};

function fiboMemo(n) {
  if (n in memo) return memo[n];
  if (n === 0 || n === 1)
    memo[n] = 1;
  else
    memo[n] = fiboMemo(n - 2) + fiboMemo(n - 1);
  return memo[n];
}

const reducer = (acc, cur) => {
  return cur % 2 === 0 // if even number
    ? acc + cur
    : acc;
}

function fiboEvenSum(n) {
  fiboMemo(n);
  return Object.values(memo).reduce(reducer, 0);
}

module.exports = fiboEvenSum;
