var express = require('express');
var app     = express();
var port    =   process.env.PORT || 3010;
var path = require( 'path' );
var router = express.Router();
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({ extended: false});

// Require Modules
// var fireStarter = require('../modules/randomFire');
var special = require('../modules/speciality');
var names = require('../modules/getPlayerName');

//start listening
app.listen( port, function(){
  console.log('The server is listening on:', port);
});

//set up base url
app.get('/', function(req, res){
  console.log("The base URL has been hit");
  res.sendFile(path.resolve('public/index.html'));
});//end base url

//set public folder for use
app.use(express.static('public'));
//use bodyParser
app.use(urlEncodedParser);

app.post('/', function(req, res){
  console.log('You hit the post route');
    var gameType = req.body.type;
    var playerNames = names(req.body);
    var specialNum = special( gameType, playerNames);
    console.log(playerNames);
    console.log(gameType);
    console.log(specialNum);
  res.send(specialNum);
});
