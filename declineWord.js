'use strict';

function declineWord(n, body, one = null, two_till_four = null, zero_or_five_till_nine = null) {
  n = Math.abs(n % 100);
  const n1 = Math.floor(n / 10);
  const n2 = n % 10;

  if(!(body || one).match(/[a-z]/i)) {
    one = one || '';
    two_till_four = two_till_four || '';
    zero_or_five_till_nine = zero_or_five_till_nine || '';
  } else {
    one = one != null ? one : '';
    two_till_four = two_till_four != null ? two_till_four : 's';
    zero_or_five_till_nine = zero_or_five_till_nine != null ? zero_or_five_till_nine : two_till_four;
  }

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
