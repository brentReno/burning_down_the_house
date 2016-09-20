

var specialSkill = function(gameType, playerNames){
  console.log("You are not a special little snowflake");
  console.log("player names", playerNames.length);
  var numPlayers = playerNames.length;
var numbers =[1,2,3,4,5,6,7,8,];
var randoms=[];
 //  Randomize array element order in-place.
 //  Using Durstenfeld shuffle algorithm.
function shuffleArray(numbers) {
  for (var i = numbers.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
  }//end shuffle for
  return numbers;
}//end shuffle

for (var i = 0; i < playerNames.length; i++) {
  shuffleArray(numbers);
  var random = numbers.shift();
  console.log("this is random:", random);
  var player = {name: playerNames[ i ], randomNum: random};
  randoms.push(player);
}//end for
console.log("This is the random array:", randoms);
return randoms;


};//end special skill

module.exports=specialSkill;
