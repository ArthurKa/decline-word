'use strict';

function declineWord(n, body, one = '', two_four = '', zero_or_five_nine = '') {
  n = Math.abs(n % 100);
  const n1 = Math.floor(n/10);
  const n2 = n % 10;

  if(n1 === 1 || [0, 5, 6, 7, 8, 9].includes(n2)) {
    return body + zero_or_five_nine;
  }
  if(n2 === 1) {
    return body + one;
  }
  return body + two_four;
}

module.exports = declineWord;
