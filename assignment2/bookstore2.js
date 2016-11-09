// Second, better version of bookstore.js in assignment1
var book1 = {
	'title': "Ways of Curating",
	'price': 16.95,
	'author': "Hans Ulrich Orbist"
};

var book2 = {
	'title': "Ardor",
	'price': 39.5,
	'author': "Roberto Calasso"
};

var book3 = {
	'title': "Why Grow Up?",
	'price': 15.95,
	'author': "Susan Neiman"
};

var array_of_books = [
	{ 'title': "Ways of Curating",
	'price': 16.95,
	'author': "Hans Ulrich Orbist"
	}, 
	{ 'title': "Ardor",
	'price': 39.5,
	'author': "Roberto Calasso"
	}, 
	{'title': "Why Grow Up?",
	'price': 15.95,
	'author': "Susan Neiman"
	}
];

//Fuctions are almost always below the var's in a file

function print_the_book(a_book) {
	console.log('----------------');
	console.log('Title: ' + a_book.title);
	console.log('Price: ' + a_book.price);
	console.log('Author: ' + a_book.author);
}





for(var i = 0; i < array_of_books.length; i++) {
	print_the_book(array_of_books[i])
}

//Console log is something that's coming in
//Basically means to look for a match, if not found, then look further
//It's also easier than to write console.log(book1), console.log(book2), etc.
//We replaced the second console.log with print_the_book, which we made up
//a_book only exists in the function print_the_book