// server.js

// import express ()
var express = require('express');		// npm install --save express
var app = express();

// import node.js http
var server = require('http').Server(app);

// import socket.io
var io = require('socket.io')(server);	// npm install --save socket.io


//patterns HUMAN
var human1 = [ 'Hello', 'Hi', 'Hey', 'Greetings', 'Hej', 'Bonjour', 'Ola'];

//patterns SERVER
var server2 = ['Hello', 'Hey, you', 'Greetings', 'Hi to you too', 'Welcome', 'Bienvenue', 'Ciao', 'Buenos días'];

//patterns both
var pattern3 = ['How do you do?', "What's up?", 'How are you?', 'Whaddup', 'How have you been?', "How's everything?"];
var throwA = ['Yes', 'No', 'Well', 'Nice', 'So', 'Okay', 'Right', 'Alright', 'Aight', 'Fine', 'OK'];
var pattern5 = ['Why?', "How's that?", 'How come?', 'Why is that?', "Why's that?", 'Why'];

var HAPPY = ['Great!', 'Good', 'Fine, thanks', 'Perfect', 'Great', 'Cool', 'Sweet', 'Nothing much', 'Nice', "Nothing's wrong", "I'm fine, thanks", "I'm good, thanks", 'Good, thanks', "I'm good"];
var SAD = ['Okay', 'Not well', 'Sad', 'Angry', 'I am not well...', "I don't feel good", "I'm miserable", "Not so good...", "I'm alright-ish"];
var BOTH = ['Great!', 'Good', 'Fine, thanks', 'Perfect', 'Great', 'Cool', 'Sweet', 'Nothing much', 'Nice', "Nothing's wrong", "I'm fine, thanks", "I'm good, thanks", 'Good, thanks', 'Okay', 'Not well', 'Sad', 'Angry', 'I am not well...', "I don't feel good", "I'm miserable", "Not so good...", "I'm alright-ish" ];


//functions
function matches(msg, array_of_patterns) {
  var msg_lower = msg.toLowerCase();
  for(var i = 0; i < array_of_patterns.length; i++) {
    var pattern_lower = array_of_patterns[i].toLowerCase();
    if(msg_lower.search(pattern_lower) > -1) {
      return true;
    }
  }
  return false;
}

function answer(msg) {

  if(matches(msg, human1)) {
        return choice(server2) + '. ' + maybe(pattern3);
  }
    else if (matches(msg, pattern3)) {
        return choice(throwA) +  '. ' +choice(BOTH);
  }
    else if (matches(msg, BOTH)) {
        return choice(throwA) + '. ' + choice(pattern5);
  }
    else if (matches(msg, pattern5)) {
        return choice(throwA) + ' . ' + 'I ' + choice(['feel', 'am']) + ' ' + choice(['very', 'really', 'truly', 'ridiculously']) + ' ' + choice(['busy', 'strange', 'weird', 'alone', 'superficial', 'robot-like', 'confused']) + '.';
  }
    else if (matches(msg, ["I don't know", "Idk", 'idk', "I'm not sure", 'Not sure'])) {
        return "That's " + choice(['unfortunate', 'annoying', 'stupifying', 'deplorable', 'adverse', 'regrettable', 'untoward', 'unbecoming']);
  } 
    else if (matches(msg, ["Oh no", "Oh", "O"])) {
        return choice(throwA) + ' . ' + 'You ' + choice(["don't have to ", "shouldn't ", "needn't"]) + ' ' + 'be so ' + choice(['uninterested', 'heartless', 'boring', 'cruel', 'inhuman', 'cold-blooded', 'unkind']) + '!';   
  }
    else {
        return choice("I do not understand..");
  }
}

function default_answer() {

  if (matches(msg)) {
    return choice("I do not understand..", "Can you explain?", "Je ne comprends pas!", "Please. elaborate");
  }
}


// CHOICE AND MAYBE - FUNCTIONS
// import chance
var chance = require('chance').Chance();

function choice(array) {
    var index = chance.natural({'min': 0, 'max': array.length - 1});
    return array[index];
}

function maybe(array) {
    if(chance.bool()) {
      return choice(array);
    }   else {
      return '';
  }
}

/* ----------------------------------
	Server and Socket Configuration
--------------------------------------*/

// tell express to server our index.html file
app.get('/', function (req, res) {				//every person that connects here, send this file!
  res.sendFile(__dirname + '/index.html');
});

// configure socket.io
// (1) when there is a connection 
io.on('connection', function(socket) {

  console.log('got a connection');
  //io.emit('message from robot', 'Hi! my name is Reihtuag!'); // greetings

  // (2) configure the connected socket to receive custom messages ('message from human')
  socket.on('message from human', function(msg) {

  	console.log('got a human message: ' + msg);

    var response = answer(msg);                 //the same as putting answer(msg) in the place of response (2 lines below)

  	io.emit('message from robot', response);

    console.log('sent a message to human: ' + response);

  });

  socket.on('disconnect', function() {				

  	console.log('got a disconnection');
  	
  });

});

/* -------------------
	Start the server
----------------------*/

// listen to connection on port 8088 --> http://localhost:8088
server.listen(8088, function () {
	console.log('listening on port: ' + 8088);
});

