// import express ()
var express = require('express');		// npm install --save express
var app = express();

// import node.js http
var server = require('http').Server(app);

// import socket.io
var io = require('socket.io')(server);	// npm install --save socket.io

// import filesystem (aka fs)
var fs = require('fs');

//import instagram
var Instagram = require('instagram-node-lib');       // npm install --save instagram-node-lib

Instagram.set('CLIENT_ID', '271e3f74965842e79ec97c6e41444c9b');
Instagram.set('CLIENT_SECRET', 'b4f451a183d34714983d7facc9b61425');
Instagram.set('ACCESS_TOKEN', '206161736.271e3f7.97914e6e77c84216bdbeb9c5aef03ea3');

Instagram.set('callback_url', 'http://localhost:8088');
Instagram.set('redirect_uri', 'http://localhost:8088');


/* ----------------------
  Instagram Configuration
-------------------------*/

// load configuration file with all secrets, etc.
var config_file = "./insta_credentials.json";                      
var config = JSON.parse(fs.readFileSync(config_file, "utf8"));

// create the instagram client
//var client = new instagram(config);

Instagram.tags.info({
  name: 'blue',
  complete: function(data){
    console.log(data);
  }
});


function search_instagram(keyword_value, nbr_hits, filter_value) {

  
  //https://dev.twitter.com/rest/reference/get/search/posts          //FIND A LINK LIKE THIS FOR INSTA
  var instagram_search_params = {q: keyword_value, count: nbr_hits};

  // if there is a filter
  if(filter_value) {
    instagram_search_params.filter = filter_value;
  }

  client.get('search/posts', instagram_search_params, function(error, posts, response) {

    var results = [];

    console.log(posts);

    if(!error) {
      //console.log("got " + posts.statuses.length + " hits")
      for(posts of posts.statuses) {
        // console.log(posts);

        var r = {};
        r.text = posts.text;

        if(posts.entities.media) {

          r.images = [];

          for(media of posts.entities.media) {

            if(media.type == 'photo')         

              r.images.push(media.media_url);       

          }       
        }

        results.push(r);

      }

    } else {
      console.log('* ERROR *: ' + error);
    }

    // send results to client
    io.emit('search_instagram_results', results);   

    //callback(results);  


  });
}

/* ----------------------------------
	Server and Socket Configuration
--------------------------------------*/

// tell express to server our index.html file
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// configure socket.io
// (1) when there is a connection 
io.on('connection', function(socket) {

  console.log('got a connection');
  //io.emit('message from robot', 'Hi! my name is Reihtuag!'); // greetings

  // (2) configure the connected socket to receive custom messages ('message from human')
  socket.on('search_instagram', function(msg) {

  	console.log('searching instagram with: ' + msg.toString());

    search_instagram(msg.keyword_value, msg.nbr_hits, msg.filter_value);

  });

  socket.on('disconnet', function() {

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