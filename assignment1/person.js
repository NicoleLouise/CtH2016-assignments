//This is a program that finds people according to their name

var program = require('commander');
 
var person1_name = "Maurice";
var person1_age = 83;
var person1_lan = "French";

//For the books: book1_name = "Blablabla"
//program > .option ('--author [value]', 'Author of book')
//program > .option ('--title [value]', 'Title of book')
//switch(program.author) > case book1_name

//SO ADD MORE OPTIONS AND MORE VARIABLES

var person2_name = "Lotte";
var person2_age = 23;
var person2_lan = "Danish";

var person3_name = "Geert";
var person3_age = 42;
var person3_lan = "Dutch";

program
  .version('0.0.1')
  .option('-n, --name [value]', 'Name of person')
  .parse(process.argv);
 
//console.log(program.name);

switch(program.name)
{
	case person1_name: 
		console.log(person1_name);
		console.log(person1_age);
		console.log(person1_lan);
		break;
	case person2_name: 
		console.log(person2_name);
		console.log(person2_age);
		console.log(person2_lan);
		break;
	case person3_name: 
		console.log(person3_name);
		console.log(person3_age);
		console.log(person3_lan);
		break;
	default:
		console.log('No match');
		break;

}