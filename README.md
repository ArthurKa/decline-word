[![All dependencies](https://img.shields.io/librariesio/release/npm/decline-word/1.3.0?style=flat-square "All dependencies of decline-word@1.3.0")](https://libraries.io/npm/decline-word/1.3.0)
[![Reported vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/decline-word@1.3.0?style=flat-square "Reported vulnerabilities of decline-word@1.3.0")](https://snyk.io/test/npm/decline-word/1.3.0)
[![Commits](https://flat.badgen.net/github/commits/ArthurKa/decline-word)](https://github.com/ArthurKa/decline-word/commits/master)
[![NPM-version](https://img.shields.io/badge/npm-v1.3.0-blue.svg?style=flat-square&&logo=npm "Current NPM-version")](https://www.npmjs.com/package/decline-word/v/1.3.0)
[![Total downloads](https://img.shields.io/npm/dt/decline-word?style=flat-square "Total downloads for all the time")](https://npm-stat.com/charts.html?package=decline-word)
[![Developed by](https://img.shields.io/badge/developed_by-ArthurKa-blueviolet.svg?style=flat-square "Have any questions? You are always welcome.")](https://github.com/ArthurKa/decline-word/issues)\
[![Publish size](https://flat.badgen.net/packagephobia/publish/decline-word@1.3.0?label=publish 'Publish size of decline-word@1.3.0')](https://packagephobia.now.sh/result?p=decline-word@1.3.0)
[![Install size](https://flat.badgen.net/packagephobia/install/decline-word@1.3.0?label=install 'Install size of decline-word@1.3.0')](https://packagephobia.now.sh/result?p=decline-word@1.3.0)
[![Minified size](https://img.shields.io/bundlephobia/min/decline-word@1.3.0?style=flat-square&label=minified "Minified size of decline-word@1.3.0")](https://bundlephobia.com/result?p=decline-word@1.3.0)
[![Minified + gzipped size](https://img.shields.io/bundlephobia/minzip/decline-word@1.3.0?style=flat-square&label=minzipped "Minified + gzipped size of decline-word@1.3.0")](https://bundlephobia.com/result?p=decline-word@1.3.0)

# decline-word@1.3.0

Helps you to decline words in **Russian**, **Ukrainian** and **English** languages.\
It may work for some other languages, who knows.

## Installation
`decline-word` is available via npm:
``` bash
$ npm i decline-word@1.3.0
```

## Usage
### For Russian and Ukrainian languages:
| Parameter | Required | Default value | Value                                                           |
|-----------|----------|---------------|-----------------------------------------------------------------|
| 1st       | true     |               | **amount** of items                                             |
| 2nd       | true     |               | **main part** of the word (unchangeable beginning of each form) |
| 3rd       | false    | `''`          | word ending for **1 item**                                      |
| 4th       | false    | `''`          | word ending for **2 items**                                     |
| 5th       | false    | `''`          | word ending for **5 items**                                     |

```ts
import declineWord from 'decline-word';

console.log(`12 ${declineWord(12, 'яблок', 'о', 'а')}`);  // 12 яблок
console.log(`22 ${declineWord(22, 'яблок', 'о', 'а')}`);  // 22 яблока
console.log(`159 ${declineWord(159, 'яблок', 'о', 'а')}`);  // 159 яблок
console.log(`1151 ${declineWord(1151, 'яблок', 'о', 'а')}`);  // 1151 яблоко

console.log(`1 ${declineWord(1, 'апельсин', '', 'и', 'ів')}`);  // 1 апельсин
console.log(`11 ${declineWord(11, 'апельсин', '', 'и', 'ів')}`);  // 11 апельсинів
console.log(`84 ${declineWord(84, 'апельсин', '', 'и', 'ів')}`);  // 84 апельсини
console.log(`147 ${declineWord(147, 'апельсин', '', 'и', 'ів')}`);  // 147 апельсинів

console.log(`0 ${declineWord(0, '', 'гра', 'гри', 'ігор')}`);  // 0 ігор
console.log(`1 ${declineWord(1, '', 'гра', 'гри', 'ігор')}`);  // 1 гра
console.log(`4 ${declineWord(4, '', 'гра', 'гри', 'ігор')}`);  // 4 гри
console.log(`25 ${declineWord(25, '', 'гра', 'гри', 'ігор')}`);  // 25 ігор
```

### For English language:
There are some differences of default parameter values comparing with the Russian and Ukrainian languages.

| Parameter | Required | Default value     | Value                                                           |
|-----------|----------|-------------------|-----------------------------------------------------------------|
| 1st       | true     |                   | **amount** of items                                             |
| 2nd       | true     |                   | **main part** of the word (unchangeable beginning of each form) |
| 3rd       | false    | `''`              | word ending for **1 item**                                      |
| 4th       | false    | `'s'`             | word ending for **2 items**                                     |
| 5th       | false    | `<4th parameter>` | word ending for **5 items**                                     |

This difference makes more convenience for using with English words.

```ts
import declineWord from 'decline-word';

console.log(`1 ${declineWord(1, 'door')}`);  // 1 door
console.log(`10 ${declineWord(10, 'door')}`);  // 10 doors

console.log(`11 ${declineWord(11, 'hero', '', 'es')}`);  // 11 heroes
console.log(`21 ${declineWord(21, 'hero', '', 'es')}`);  // 21 hero

console.log(`5 ${declineWord(5, 'cand', 'y', 'ies')}`);  // 5 candies
console.log(`101 ${declineWord(101, 'cand', 'y', 'ies')}`);  // 101 candy

// declineWord(31, 't', 'ooth', 'eeth') or...
console.log(`31 ${declineWord(31, '', 'tooth', 'teeth')}`);  // 31 tooth
console.log(`32 ${declineWord(32, '', 'tooth', 'teeth')}`);  // 32 teeth
```

Note: `decline-word` declines English words incorrect. Just because of `if not equal one` is very simple check algorithm (and I'm too lazy to change already made one) this package declines them according to Russian/Ukrainian language rules. Do not use `decline-word` for English language if you want to decline words correct.

## Advanced usage
```ts
import { declineWrapper } from 'decline-word';

const declApples = declineWrapper('яблок', 'о', 'а');
const declOranges = declineWrapper('апельсин', '', 'а', 'ов');
const declPears = declineWrapper('груш', 'а', 'и');

for(let i = 0; i <= 6; i++) {
  console.log(`${i} ${declApples(i)} | ${i} ${declOranges(i)} | ${i} ${declPears(i)}`);
}

/*
  1st iteration: '0 яблок | 0 апельсинов | 0 груш'
  2nd iteration: '1 яблоко | 1 апельсин | 1 груша'
  3rd iteration: '2 яблока | 2 апельсина | 2 груши'
  4th iteration: '3 яблока | 3 апельсина | 3 груши'
  5th iteration: '4 яблока | 4 апельсина | 4 груши'
  6th iteration: '5 яблок | 5 апельсинов | 5 груш'
  7th iteration: '6 яблок | 6 апельсинов | 6 груш'
*/
```

### Declination of cases:
```ts
import { declineWrapper } from 'decline-word';

// Nominative case, именительный падеж, називний відмінок
const nomCase = declineWrapper('падеж', '', 'а', 'ей');
console.log('один', nomCase(1));  // один падеж
console.log('два', nomCase(2));  // два падежа
console.log('пять', nomCase(5));  // пять падежей

// Genitive case, родительный падеж, родовий відмінок
const genCase = declineWrapper('падеж', 'а', 'ей', 'ей');
console.log('одного', genCase(1));  // одного падежа
console.log('двух', genCase(2));  // двух падежей
console.log('пяти', genCase(5));  // пяти падежей

// Dative case, дательный падеж, давальний відмінок
const datCase = declineWrapper('падеж', 'у', 'ам', 'ам');
console.log('одному', datCase(1));  // одному падежу
console.log('двум', datCase(2));  // двум падежам
console.log('пяти', datCase(5));  // пяти падежам

// Accusative case, винительный падеж, знахідний відмінок
const accCase = declineWrapper('падеж', '', 'а', 'ей');
console.log('один', accCase(1));  // один падеж
console.log('два', accCase(2));  // два падежа
console.log('пять', accCase(5));  // пять падежей

// Instrumental case, творительный падеж, орудний відмінок
const insCase = declineWrapper('падеж', 'ом', 'ами', 'ами');
console.log('одним', insCase(1));  // одним падежом
console.log('двумя', insCase(2));  // двумя падежами
console.log('пятью', insCase(5));  // пятью падежами

// Prepositional case, предложный падеж, місцевий відмінок
const prepCase = declineWrapper('падеж', 'е', 'ах', 'ах');
console.log('на одном', prepCase(1));  // на одном падеже
console.log('на двух', prepCase(2));  // на двух падежах
console.log('на пяти', prepCase(5));  // на пяти падежах
```

## Testing
``` bash
$ npm test
```

## See also
- [word-decliner](https://www.npmjs.com/package/word-decliner)

---

Your improve suggestions and bug reports [are welcome](https://github.com/ArthurKa/decline-word/issues) any time.
