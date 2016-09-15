var pg = require('pg');
var connectionString ="";

var speicalSkill = function(gameType, playerNames){
  console.log("You are not a special little snowflake");
//set globals specilNumber
  var specialNumber;

  //random number function
  var randomNumber = function(){
    var nums=[0,1,2,3,4,5,6,7,8];
    var randNums =[];
    var i = nums.length;
    var j=0;
      while(i--){
      j = Math.floor(Math.random()*(i+1));
      ranNums.push(nums[j]);
      specialNumber = nums.splice(j,1);
      }
  };//end random number

//if to determine gameType
if(gameType =="Family Game"){
  return;
}
else{
  //create players object
  var playerPackage= [];
  for (var i = 0; i < playerNames.length; i++) {
    //get player name
    var shifter = playerNames.shift();
    // get random number
    randomNumber();
    //get spcialist role from database
    var speciality = "SELECT title FROM specialist WHERE id="+ randomNumber;
    //package into object
    var createPlayer = {playerName:shifter, special:speciality};
    //push into array
    playerPackage.push(creatPlayer);
    //return array of objects
    return(playerPackage);
  }//end for
}//end elses
};//end special skill

module.exports=specialSkill;
