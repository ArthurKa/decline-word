Helps you to decline words in **Russian**, **Ukrainian** and **English** languages.

## Installation
`decline-word` is available via npm:
``` bash
$ npm i decline-word
```

## Usage
### For Russian and Ukrainian languages:
1st parameter: **amount** of item(s)\
2nd: **main** part of the word (unchangeable for each form)\
3rd (optional, default = `''`): word ending for **1 item**\
4th (optional, default = `''`): word ending for **2 items**\
5th (optional, default = `''`): word ending for **5 items**
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
There are some differences of default parameter values comparing with the Russian and Ukrainian languages.\
1st parameter: **amount** of item(s)\
2nd: **main** part of the word (unchangeable for each form)\
3rd (optional, default = `''`): word ending for **1 item**\
4th (optional, default = `'s'`): word ending for **2 items**\
5th (optional, default = `<4th parameter>`): word ending for **5 items**\
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

### Declination of cases
``` js
const declineWord = require('decline-word');

// Nominative case, именительный падеж, називний відмінок
console.log('один', declineWord(1, 'падеж', '', 'а', 'ей'));  // один падеж
console.log('два', declineWord(2, 'падеж', '', 'а', 'ей'));  // два падежа
console.log('пять', declineWord(5, 'падеж', '', 'а', 'ей'));  // пять падежей

// Genitive case, родительный падеж, родовий відмінок
console.log('одного', declineWord(1, 'падеж', 'а', 'ей', 'ей'));  // одного падежа
console.log('двух', declineWord(2, 'падеж', 'а', 'ей', 'ей'));  // двух падежей
console.log('пяти', declineWord(5, 'падеж', 'а', 'ей', 'ей'));  // пяти падежей

// Dative case, дательный падеж, давальний відмінок
console.log('одному', declineWord(1, 'падеж', 'у', 'ам', 'ам'));  // одному падежу
console.log('двум', declineWord(2, 'падеж', 'у', 'ам', 'ам'));  // двум падежам
console.log('пяти', declineWord(5, 'падеж', 'у', 'ам', 'ам'));  // пяти падежам

// Accusative case, винительный падеж, знахідний відмінок
console.log('один', declineWord(1, 'падеж', '', 'а', 'ей'));  // один падеж
console.log('два', declineWord(2, 'падеж', '', 'а', 'ей'));  // два падежа
console.log('пять', declineWord(5, 'падеж', '', 'а', 'ей'));  // пять падежей

// Instrumental case, творительный падеж, орудний відмінок
console.log('одним', declineWord(1, 'падеж', 'ом', 'ами', 'ами'));  // одним падежом
console.log('двумя', declineWord(2, 'падеж', 'ом', 'ами', 'ами'));  // двумя падежами
console.log('пятью', declineWord(5, 'падеж', 'ом', 'ами', 'ами'));  // пятью падежами

// Prepositional case, предложный падеж, місцевий відмінок
console.log('на одном', declineWord(1, 'падеж', 'е', 'ах', 'ах'));  // на одном падеже
console.log('на двух', declineWord(2, 'падеж', 'е', 'ах', 'ах'));  // на двух падежах
console.log('на пяти', declineWord(5, 'падеж', 'е', 'ах', 'ах'));  // на пяти падежах
```

## Testing
``` bash
$ npm test
```

Your improve suggestions and bug reports are welcome any time.
