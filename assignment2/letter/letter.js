//{
//  "name": "letter",
//  "version": "1.0.0",
//  "description": "",
//  "main": "index.js",
//  "scripts": {
//    "test": "echo \"Error: no test specified\" && exit 1"
//  },
//  "author": "nicolelouise",
//  "license": "ISC",
// "dependencies": {
//    "chance": "^1.0.4",
//    "commander": "^2.9.0"
//  }
//}

// letter.js

var chance = require('chance').Chance();

var wrap = require('word-wrap');

const first = ['DARLING', 'DEAR', 'HONEY', 'JEWEL'];

const second = ['DUCK', 'LOVE', 'MOPPET', 'SWEETHEART'];

const adjectives = ['ADORABLE', 'AFFECTIONATE', 'AMOROUS', 'ANXIOUS', 'ARDENT', 'AVID', 'BREATHLESS', 'BURNING', 'COVETOUS', 'CRAVING', 'CURIOUS', 'DARLING', 'DEAR', 'DEVOTED', 'EAGER', 'EROTIC', 'FERVENT', 'FOND', 'IMPATIENT', 'KEEN', 'LITTLE', 'LOVEABLE', 'LOVESICK', 'LOVING', 'PASSIONATE', 'PRECIOUS', 'SWEET', 'SYMPATHETIC', 'TENDER', 'UNSATISFIED', 'WISTFUL'];

const nouns = ['ADORATION', 'AFFECTION', 'AMBITION', 'APPETITE', 'ARDOUR', 'CHARM', 'DESIRE', 'DEVOTION', 'EAGERNESS', 'ENCHANTMENT', 'ENTHUSIASM', 'FANCY', 'FELLOW FEELING', 'FERVOUR', 'FONDNESS', 'HEART', 'HUNGER', 'INFATUATION', 'LIKING', 'LONGING', 'LOVE', 'LUST', 'PASSION', 'RAPTURE', 'SYMPATHY', 'TENDERNESS', 'THIRST', 'WISH', 'YEARNING'];

const adverbs = ['AFFECTIONATELY', 'ANXIOUSLY', 'ARDENTLY', 'AVIDLY', 'BEAUTIFULLY', 'BREATHLESSLY', 'BURNINGLY', 'COVETOUSLY', 'CURIOUSLY', 'DEVOTEDLY', 'EAGERLY', 'FERVENTLY', 'FONDLY', 'IMPATIENTLY', 'KEENLY', 'LOVINGLY', 'PASSIONATELY', 'SEDUCTIVELY', 'TENDERLY', 'WINNINGLY', 'WISTFULLY'];

const verbs = ['ADORES', 'ATTRACTS', 'CARES FOR', 'CHERISHES', 'CLINGS TO', 'DESIRES','HOLDS DEAR', 'HOPES FOR', 'HUNGERS FOR', 'IS WEDDED TO', 'LIKES', 'LONGS FOR', 'LOVES', 'LUSTS AFTER', 'PANTS FOR', 'PINES FOR', 'PRIZES', 'SIGHS FOR', 'TEMPTS', 'THIRSTS FOR', 'TREASURES', 'WANTS', 'WISHES', 'WOOS', 'YEARNS FOR'];

//Arrays of adjectives, verbs, nouns, etc.
//First, simple: adjective + noun

function short() {
  return choice(adjectives) + ' ' + choice(nouns);
}

//short/long returns a string, you can recall short/long in the console
//now: generating a random index

function choice(array) {
  var index = chance.natural({'min': 0, 'max': array.length});
  return array[index];
}

function long(array) {
  return 'MY ' + maybe(adjectives) + ' ' + choice(nouns)+ ' ' +
                maybe(adverbs) + ' '+ choice(verbs) + ' '+ 'YOUR ' 
                + maybe(adjectives) + ' ' + choice(nouns)+'.';
}

//an indez randomly between zero and the length ofd the array

function maybe(array) {
  if(chance.bool()) {
    return choice(array);
  } else {
    return '';
  }
}

var text = '';

//changed function long to maybe(adjectives) etc.
//Now every time you use long function, it uses maybe function as well.

console.log(long());

for (var i = 0; i < 5; i++) {
    text += long(); //text = text + long ()
  }

console.log(wrap(text, {'width': 50}));
