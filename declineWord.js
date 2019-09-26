'use strict';

function declineWord(n, body, one = '', two_till_four = '', zero_or_five_till_nine = '') {
  n = Math.abs(n % 100);
  const n1 = Math.floor(n / 10);
  const n2 = n % 10;

  if(n1 !== 1) {
    if(n2 === 1) {
      return `${body}${one}`;
    }
    if(2 <= n2 && n2 <= 4) {
      return `${body}${two_till_four}`;
    }
  }
  return `${body}${zero_or_five_till_nine}`;
}

module.exports = declineWord;
