//{
//  "name": "letter",
//  "version": "1.0.0",
//  "description": "script that generates a (skeleton) letter based on Christopher Stratchey's Love Letter",
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

var chance = require('chance').Chance();

var wrap = require('word-wrap');

var program = require('commander');

//---------------------------------------
const my = ['MY ', ' ']

const header = ['HELLO,', 'GREETINGS,', 'HEY YOU,', 'GOOD DAY,', 'BONJOUR,']

const bye = ['GOODBYE', 'FAREWELL', 'CIAO', 'CHEERIO', 'ADIEU', 'HASTA LA VISTA', "I'LL SEE YOU WHEN I SEE YOU"]

const first = ['DARLING', 'LOVE', 'SWEETHEART', 'DEAR', 'HONEY', 'JEWEL', 'PASSION', 'LOVE', 'HUBBY', 'BAE', 'BABY'];

const time = ['FOREVER', 'FOR ALL ETERNITY', 'TO THE MOON AND BACK', 'ACROSS THE UNIVERSE', 'UNTIL THE END OF TIME', 'WITH MY UNDYING LOVE']

const adjectives = ['ADORABLE', 'AFFECTIONATE', 'AMOROUS', 'ANXIOUS', 'ARDENT', 'AVID', 'BREATHLESS', 'BURNING', 'BEAUTIFUL', 'COVETOUS', 'CRAVING', 'CURIOUS', 'DARLING', 'DEAR', 'DEVOTED', 'EAGER', 'EROTIC', 'FERVENT', 'FOND', 'IMPATIENT', 'KEEN', 'LITTLE', 'LOVEABLE', 'LOVESICK', 'LOVING', 'PASSIONATE', 'PRECIOUS', 'SWEET', 'SYMPATHETIC', 'TENDER', 'UNSATISFIED', 'WISTFUL'];

const adjectiveness = ['ABSENTMINDEDNESS', 'ACCESSIBLENESS', 'ADMIRABLENESS', 'ADEQUATENESS', 'BEWILDEREDNESS', 'BLAMELESSNESS', 'BIGHEARTEDNESS', 'COMPASSIONATENESS', 'COMPLEXNESS','DEARNESS', 'DECISIVENESS', 'FORMIDABLENESS', 'FREAKINESS', 'LIFELIKENESS', 'LIGHTHEARTEDNESS', 'NICENESS', 'PLAYFULNESS', 'REALNESS', 'TRUSTWORTHINESS']

const nouns = ['ADORATION', 'AFFECTION', 'AMBITION', 'APPETITE', 'ARDOUR', 'CHARM', 'DESIRE', 'DEVOTION', 'EAGERNESS', 'ENCHANTMENT', 'ENTHUSIASM', 'FANCY', 'FELLOW FEELING', 'FERVOUR', 'FONDNESS', 'HEART', 'HUNGER', 'INFATUATION', 'LIKING', 'LONGING', 'LOVE', 'LUST', 'PASSION', 'RAPTURE', 'SYMPATHY', 'TENDERNESS', 'THIRST', 'WISH', 'YEARNING'];

const adverbs = ['AFFECTIONATELY', 'ANXIOUSLY', 'ARDENTLY', 'AVIDLY', 'BEAUTIFULLY', 'BREATHLESSLY', 'BURNINGLY', 'COVETOUSLY', 'CURIOUSLY', 'DEVOTEDLY', 'EAGERLY', 'FERVENTLY', 'FONDLY', 'IMPATIENTLY', 'KEENLY', 'LOVINGLY', 'PASSIONATELY', 'SEDUCTIVELY', 'TENDERLY', 'WINNINGLY', 'WISTFULLY'];

const verbs = ['ADORES', 'ATTRACTS', 'CARES FOR', 'CHERISHES', 'CLINGS TO', 'DESIRES','HOLDS DEAR', 'HOPES FOR', 'HUNGERS FOR', 'IS WEDDED TO', 'LIKES', 'LONGS FOR', 'LOVES', 'LUSTS AFTER', 'PANTS FOR', 'PINES FOR', 'PRIZES', 'SIGHS FOR', 'TEMPTS', 'THIRSTS FOR', 'TREASURES', 'WANTS', 'WISHES', 'WOOS', 'YEARNS FOR'];

const verbsI = ['ADORE', 'ATTRACT', 'CARE FOR', 'CHERISH', 'CLING TO', 'DESIRE','HOLD DEAR', 'HOPE FOR', 'HUNGER FOR', 'AM WEDDED TO', 'LIKE', 'LONG FOR', 'LOVE', 'LUST AFTER', 'PANT FOR', 'PINE FOR', 'PRIZE', 'SIGH FOR', 'TEMPT', 'THIRST FOR', 'TREASURE', 'WANT', 'WISH', 'WOO', 'YEARN FOR'];

const want = ['WANT', 'NEED', 'DESIRE', 'REQUIRE']

const touches = ['CARESS', 'STROKE', 'TOUCH', 'FEEL', 'BRUSH','GRAZE', 'FONDLE', 'CLUTCH']

const body = ['TILTED NOSE', 'CURLY HAIR', 'SLENDER WAIST', 'DIMPLED CHIN', 'SOFT SKIN', 'KIND HANDS', 'SMOOTH LEGS', 'CUTE FEET']


//---------------------------------------
program
	.version('1.0')
	.option('-w, --width [width]', "Width of paragraph")
	.option('-s, --sentence [sentence]', "Number of sentences")
	.parse(process.argv);

var width = parseInt(program.width);
var sentence = parseInt(program.sentence);

//---------------------------------------
function choice(array) {
  	var index = chance.natural({'min': 0, 'max': array.length - 1});
  	return array[index];
}

function maybe(array) {
  	if(chance.bool()) {
   		return choice(array);
  	} 	else {
    	return '';
  }
}

//---------------------------------------
function salutation() {
	return choice(header)+ ' ' + maybe(my) + maybe(adjectives)
	+ ' ' + choice(first)+ ',';
}

function goodbye() {
	return choice(bye) + ', ' + 'MY ' + choice(first)+ '.';
}

//---------------------------------------
function short() {
  	return 'I ' + choice(verbsI) + ' ' + 'THE WAY YOU ' + choice(verbsI) 
  	+ ' ' +'ME, YOUR ' + choice(first) + ',' + ' ' + choice(time)+ '.';        ;
}

function long(array) {
  	return 'MY ' + maybe(adjectives) + ' ' + choice(nouns)+ ' ' +
                maybe(adverbs) + ' '+ choice(verbs) + ' '+ 'YOUR ' 
                + maybe(adjectives) + ' ' + choice(nouns)+'.';
}

function medium(array) {
  	return 'I '+ maybe(adverbs) +' '+ choice(verbsI)+' '+'YOUR'+' '
  	+maybe(adjectives) + ' '+choice(adjectiveness)+'.';
}

function touch() {
	return 'I ' + choice(want) + ' ' + 'TO ' + choice(touches) + ' '
	+ 'YOUR ' + maybe(adjectives) + ' ' + choice(body)+ '.';
}

//--------------------------------------- OUTPUT

// in order to use word-wrap, I need to construct a single string (text) containing all generated sentences:
var text = '';

console.log('\n\n\n'); 						//creates 3 newlines

console.log(salutation());					//creates solutation based on line78

console.log('\n');

//creates a number of sentences, randomly chosen, if at all
for (var i = 0; i < sentence; i++) { 		//loop the proces

	var c = choice(['medium', 'long', 'short', 'touch']);		//standard: first a medium sentence, then a long sentence

	if(c == 'medium') {						//if 'medium' was chosen from line87, produce a medium sentence and add to text
		text += ' ' + medium();
	} else if(c == 'long') {				//if 'long' was chosen from line87, produce a long sentence and add to text
		text += ' ' + long();
	} else if (c == 'short') {				//if 'short' was chosen from line87, produce a short sentence and add to text
		text += ' ' + short();
	} else if(c == 'touch') {				//if 'sentence' was chosen from line87, produce a touch sentence and add to text
		text += ' ' + touch();
	}
}

console.log('\n');

//---------------------------------------
console.log(wrap(text, {'width': width}));	//makes it possible to choose the width of every letter

console.log('\n\n\n'); 						//creates 3 newlines

console.log(goodbye());						//the goodbye based on goodbye()