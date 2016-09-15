

var specialSkill = function(gameType, playerNames){
  console.log("You are not a special little snowflake");
  console.log("player names", playerNames);
//set globals specialNumber
  var specialNumber;
  var specialNumbers =[];
    var nums=[1,2,3,4,5,6,7,8];
    var randNums = [];
    var j=0;
      for (var i = 1; i <= playerNames.length; i++) {
        j = Math.floor(Math.random()*(i+1));
        randNums.push(nums[j]);
        specialNumber = nums.splice(j,1);
        console.log("special number in module=",specialNumber);
        specialNumbers.push(specialNumber);
      }
      return(specialNumbers);
};//end special skill

module.exports=specialSkill;
