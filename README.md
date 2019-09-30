Helps you to decline words in **Russian**, **Ukrainian** and **English** languages.

## Installation
`decline-word` is available via npm:
``` bash
$ npm i decline-word
```

## Usage
### For Russian and Ukrainian languages:
1st parameter: **amount** of item(s)\
2nd: main word **body** (unchangeable part of word for each form)\
3rd (optional, dafault = `''`): word ending for **1 item**\
4th (optional, dafault = `''`): word ending for **2 items**\
5th (optional, dafault = `''`): word ending for **5 items**
``` js
const declineWord = require('decline-word');

console.log(12, declineWord(12, 'яблок', 'о', 'а'));  // 12 яблок
console.log(22, declineWord(22, 'яблок', 'о', 'а'));  // 22 яблока
console.log(159, declineWord(159, 'яблок', 'о', 'а'));  // 159 яблок
console.log(1151, declineWord(1151, 'яблок', 'о', 'а'));  // 1151 яблоко

console.log(1, declineWord(1, 'апельсин', '', 'и', 'ів'));  // 1 апельсин
console.log(11, declineWord(11, 'апельсин', '', 'и', 'ів'));  // 11 апельсинів
console.log(84, declineWord(84, 'апельсин', '', 'и', 'ів'));  // 84 апельсини
console.log(147, declineWord(147, 'апельсин', '', 'и', 'ів'));  // 147 апельсинів
```

### For English language:
There is some difference of default parameter values comparing with the Russian and Ukrainian languages.\
1st parameter: **amount** of item(s)\
2nd: main word **body** (unchangeable part of word for each form)\
3rd (optional, dafault = `''`): word ending for **1 item**\
4th (optional, dafault = `'s'`): word ending for **2 items**\
5th (optional, dafault = `<4th parameter>`): word ending for **5 items**\
That difference is made for more convenience using with English words.
``` js
const declineWord = require('decline-word');

console.log(1, declineWord(1, 'door'));  // 1 door
console.log(10, declineWord(10, 'door'));  // 10 doors

console.log(11, declineWord(11, 'hero', '', 'es'));  // 11 heroes
console.log(21, declineWord(21, 'hero', '', 'es'));  // 21 hero

console.log(5, declineWord(5, 'cand', 'y', 'ies'));  // 5 candies
console.log(101, declineWord(101, 'cand', 'y', 'ies'));  // 101 candy

// declineWord(31, 't', 'ooth', 'eeth') or...
console.log(31, declineWord(31, '', 'tooth', 'teeth'));  // 31 tooth
console.log(32, declineWord(32, '', 'tooth', 'teeth'));  // 32 teeth
```

Your improve suggestions and bug reports are welcome any time.
