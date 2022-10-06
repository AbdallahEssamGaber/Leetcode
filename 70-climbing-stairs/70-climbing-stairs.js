/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

  let first = 1,
    second = 1;

  for (let i = 0; i <= n-1; i++) {
    const third = first;
    first = first + second;
    second = third;
  }

  return second;
};

