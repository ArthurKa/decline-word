'use strict';

const assert = require('assert');
const declineWord = require('..');

const declineWrapper = (...args) => n => declineWord(n, ...args);

const apples = declineWrapper('яблок', 'о', 'а');
const plums = declineWrapper('слив', 'а', 'ы');
const oranges = declineWrapper('апельсин', '', 'и', 'ів');
const doors = declineWrapper('door');
const heroes = declineWrapper('hero', '', 'es');
const candies = declineWrapper('cand', 'y', 'ies');
const teeth = declineWrapper('', 'tooth', 'teeth');

const testCases = [
  [apples, 12, 'яблок'],
  [apples, 22, 'яблока'],
  [apples, 159, 'яблок'],
  [apples, 1151, 'яблоко'],

  [plums, 33, 'сливы'],
  [plums, 311, 'слив'],
  [plums, 401, 'слива'],
  [plums, 9999, 'слив'],

  [oranges, 1, 'апельсин'],
  [oranges, 11, 'апельсинів'],
  [oranges, 84, 'апельсини'],
  [oranges, 147, 'апельсинів'],

  [doors, 1, 'door'],
  [doors, 10, 'doors'],
  [doors, 11, 'doors'],
  [doors, 12, 'doors'],
  [doors, 31, 'door'],
  [doors, 101, 'door'],

  [heroes, 1, 'hero'],
  [heroes, 10, 'heroes'],
  [heroes, 11, 'heroes'],
  [heroes, 12, 'heroes'],
  [heroes, 31, 'hero'],
  [heroes, 101, 'hero'],

  [candies, 1, 'candy'],
  [candies, 10, 'candies'],
  [candies, 11, 'candies'],
  [candies, 12, 'candies'],
  [candies, 31, 'candy'],
  [candies, 101, 'candy'],

  [teeth, 1, 'tooth'],
  [teeth, 10, 'teeth'],
  [teeth, 11, 'teeth'],
  [teeth, 12, 'teeth'],
  [teeth, 31, 'tooth'],
  [teeth, 101, 'tooth'],
];

describe('decline-word', () => {
  for(const [f, n, expected] of testCases) {
    it(`${n} ${expected}`, () => {
      assert.equal(f(n), expected);
    });
  }
});
