var nameGame = function(playerData){
  console.log("Getting names, yo!");
  console.log("heres what names got:",playerData);
  //create an array
  var nameyNames=[];
  //get number of players
  var numPlayers = Number(playerData.players);
  console.log(numPlayers);
  //go through for number of players
  switch (numPlayers) {
    case 2:
      nameyNames.push(playerData.playerOneName);
      nameyNames.push(playerData.playerTwoName);
      break;
    case 3:
      nameyNames.push(playerData.playerOneName);
      nameyNames.push(playerData.playerTwoName);
      nameyNames.push(playerData.playerThreeName);
      break;
    case 4:
      nameyNames.push(playerData.playerOneName);
      nameyNames.push(playerData.playerTwoName);
      nameyNames.push(playerData.playerThreeName);
      nameyNames.push(playerData.playerFourName);
      break;
    case 5:
      nameyNames.push(playerData.playerOneName);
      nameyNames.push(playerData.playerTwoName);
      nameyNames.push(playerData.playerThreeName);
      nameyNames.push(playerData.playerFourName);
      nameyNames.push(playerData.playerFiveName);
      break;
    case 6:
      nameyNames.push(playerData.playerOneName);
      nameyNames.push(playerData.playerTwoName);
      nameyNames.push(playerData.playerThreeName);
      nameyNames.push(playerData.playerFourName);
      nameyNames.push(playerData.playerFiveName);
      nameyNames.push(playerData.playerSixName);
      break;
    default:
      console.log("ERROR!!!!");

  }
  return nameyNames;
};

module.exports=nameGame;
