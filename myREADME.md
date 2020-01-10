<header>

Helps you to decline words in **Russian**, **Ukrainian** and **English** languages.\
Maybe it works for some other languages, who knows.

<installation>

## Usage
### For Russian and Ukrainian languages:
1st parameter: **amount** of item(s)\
2nd: **main part** of the word (unchangeable for each form)\
3rd (optional, default = `''`): word ending for **1 item**\
4th (optional, default = `''`): word ending for **2 items**\
5th (optional, default = `''`): word ending for **5 items**
``` js
const declineWord = require('.');

console.log(`12 ${declineWord(12, 'яблок', 'о', 'а')}`);  // 12 яблок
console.log(`22 ${declineWord(22, 'яблок', 'о', 'а')}`);  // 22 яблока
console.log(`159 ${declineWord(159, 'яблок', 'о', 'а')}`);  // 159 яблок
console.log(`1151 ${declineWord(1151, 'яблок', 'о', 'а')}`);  // 1151 яблоко

console.log(`1 ${declineWord(1, 'апельсин', '', 'и', 'ів')}`);  // 1 апельсин
console.log(`11 ${declineWord(11, 'апельсин', '', 'и', 'ів')}`);  // 11 апельсинів
console.log(`84 ${declineWord(84, 'апельсин', '', 'и', 'ів')}`);  // 84 апельсини
console.log(`147 ${declineWord(147, 'апельсин', '', 'и', 'ів')}`);  // 147 апельсинів
```

### For English language:
There are some differences of default parameter values comparing with the Russian and Ukrainian languages.\
1st parameter: **amount** of item(s)\
2nd: **main part** of the word (unchangeable for each form)\
3rd (optional, default = `''`): word ending for **1 item**\
4th (optional, default = `'s'`): word ending for **2 items**\
5th (optional, default = `<4th parameter>`): word ending for **5 items**\
That difference is made for more convenience using with English words.
``` js
const declineWord = require('.');

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

## Advanced usage
``` js
const declineWord = require('.');

const declApples = declineWord.wrap('яблок', 'о', 'а');
const declOranges = declineWord.wrap('апельсин', '', 'а', 'ов');
const declPears = declineWord.wrap('груш', 'а', 'и');

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
``` js
const { declineWrapper } = require('.');

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

<footer>
