//This is a program that finds books according to their title
//AND I want it to find books according to author, price and kind too.

var program = require('commander');
 
var book1_title = 'The Wolf of Wall Street';
var book1_author = 'Jordan Belfort' ;
var book1_price = 13.95;
var book1_kind = 'Paperback';

var book2_title = 'The Great Gatsby';
var book2_author = 'F. Scott Fitzgerald';
var book2_price = 4.99;
var book2_kind = 'Paperback';

var book3_title = 'Divergent';
var book3_author = 'Veronica Roth';
var book3_price =10.00 ;
var book3_kind = 'Trade Paperback';

var book4_title = 'The Help';
var book4_author = 'Kathryn Stockett';
var book4_price = 9.95 ;
var book4_kind = 'Paperback';

var book5_title = 'The DUFF: Designated Ugly Fat Friend';
var book5_author = 'Kody Keplinger';
var book5_price = 13.99;
var book5_kind = 'Paperback';

program
  .version('0.0.1')
  .option('-t, --title [value]', 'Booktitle')
  .option('-a, --author [value]', 'Author of book')
  .option('-p, --price [value]', 'Price of book')
  .option('-k, --kind [value]', 'Kind of book')
  .parse(process.argv);

//console.log('We found this book in our records:');
	//if (program.title) console.log('This book is called');

//Search based on -t "title"
switch(program.title)
{
	case book1_title: 
		console.log(book1_title);
		console.log(book1_author);
		console.log(book1_price);
		console.log(book1_kind);
		break;
	case book2_title: 
		console.log(book2_title);
		console.log(book2_author);
		console.log(book2_price);
		console.log(book2_kind);
		break;
	case book3_title: 
		console.log(book3_title);
		console.log(book3_author);
		console.log(book3_price);
		console.log(book3_kind);
		break;
	case book4_title: 
		console.log(book4_title);
		console.log(book4_author);
		console.log(book4_price);
		console.log(book4_kind);
		break;
	case book5_title: 
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_price);
		console.log(book5_kind);
		break;

//Search based on -a "author" ?????

	case book1_author: 
		console.log(book1_title);
		console.log(book1_author);
		console.log(book1_price);
		console.log(book1_kind);
		break;
	case book2_author: 
		console.log(book2_title);
		console.log(book2_author);
		console.log(book2_price);
		console.log(book2_kind);
		break;
	case book3_author: 
		console.log(book3_title);
		console.log(book3_author);
		console.log(book3_price);
		console.log(book3_kind);
		break;
	case book4_author: 
		console.log(book4_title);
		console.log(book4_author);
		console.log(book4_price);
		console.log(book4_kind);
		break;
	case book5_author: 
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_price);
		console.log(book5_kind);
		break;

//Search based on -p "price"

	case book5_price: 
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_price);
		console.log(book5_kind);
		break;
	case book5_price: 
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_price);
		console.log(book5_kind);
		break;
	case book5_price: 
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_price);
		console.log(book5_kind);
		break;
	case book5_price: 
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_price);
		console.log(book5_kind);
		break;
	case book5_price: 
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_price);
		console.log(book5_kind);
		break;

//Search based on -k "kind" (Trader paperback vs Paperback)

	case book5_kind: 
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_price);
		console.log(book5_kind);
		break;
	case book5_kind: 
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_price);
		console.log(book5_kind);
		break;
	case book5_kind: 
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_price);
		console.log(book5_kind);
		break;
	case book5_kind: 
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_price);
		console.log(book5_kind);
		break;
	case book5_kind: 
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_price);
		console.log(book5_kind);
		break;


	default:
		console.log('No match :(');
		break;
}