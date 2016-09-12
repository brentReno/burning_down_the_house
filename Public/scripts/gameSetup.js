console.log("You may now start the fire!");
var numPlayers;
$(document).ready(function(){
  console.log("JQ is sourced");
  displaySetupForm();
  displayPlayerInfo();
});//end document ready

//Display an input form dependent on number of players
var displaySetupForm = function(){
  //get number of players
  $('#playersNumSelect').on('click', function(){
    console.log('in playersNumSelect on click');
    numPlayers = $(".numPlayersIn").val();
    console.log(numPlayers);
      //send form based on number of players
      var playerDiv;
      switch (Number(numPlayers)) {
        case 2:
        //set playerDiv contents to 2
        playerDiv = "<div id='PlayerDiv'><p>Enter Players Names</p><form id ='players2'>Player One: <br><input type='text' name='playerOneName'><br>Player Two:<br><input type='text' name='playerTwoName'></form><button id='sendPlayers'>Send</button></div> ";
        //empty display Div and add Player Div
        $("#displayDiv").empty().html(playerDiv);

        break;
        case 3:
        //set playerDiv contents to 3
        playerDiv = "<div id='PlayerDiv'><p>Enter Players Names</p><form id ='players2'>Player One: <br><input type='text' name='playerOneName'><br>Player Two:<br><input type='text' name='playerTwoName'><br>Player Three:<br><input type='text' name='playerThreeName'></form><button id='sendPlayers'>Send</button></div> ";
        //empty display Div and add Player Div
        $("#displayDiv").empty().html(playerDiv);
          break;
        case 4:
        //set playerDiv contents to 4
        playerDiv = "<div id='PlayerDiv'><p>Enter Players Names</p><form id ='players2'>Player One: <br><input type='text' name='playerOneName'><br>Player Two:<br><input type='text' name='playerTwoName'><br>Player Three:<br><input type='text' name='playerThreeName'><br>Player Four:<br><input type='text' name='playerFourName'></form><button id='sendPlayers'>Send</button></div> ";
        //empty display Div and add Player Div
        $("#displayDiv").empty().html(playerDiv);
          break;
        case 5:
        //set playerDiv contents to 5
        playerDiv = "<div id='PlayerDiv'><p>Enter Players Names</p><form id ='players2'>Player One: <br><input type='text' name='playerOneName'><br>Player Two:<br><input type='text' name='playerTwoName'><br>Player Three:<br><input type='text' name='playerThreeName'><br>Player Four:<br><input type='text' name='playerFourName'><br>Player Five:<br><input type='text' name='playerFiveName'></form><button id='sendPlayers'>Send</button></div> ";
        //empty display Div and add Player Div
        $("#displayDiv").empty().html(playerDiv);
          break;
        case 6:
        //set playerDiv contents to 5
        playerDiv = "<div id='PlayerDiv'><p>Enter Players Names</p><form id ='players2'>Player One: <br><input type='text' name='playerOneName'><br>Player Two:<br><input type='text' name='playerTwoName'><br>Player Three:<br><input type='text' name='playerThreeName'><br>Player Four:<br><input type='text' name='playerFourName'><br>Player Five:<br><input type='text' name='playerFiveName'><br>PlayerSix:<br><input type='text' name='playerSixName'></form><button id='sendPlayers'>Send</button></div> ";
        //empty display Div and add Player Div
        $("#displayDiv").empty().html(playerDiv);
        break;
        default:
        console.log("Error!!!");
      }
  });//end displaySetupForm



};
//display info for each player (color, specialty)
var displayPlayerInfo = function(){
  //on click for form submit
  $('body').on('click' , '#sendPlayers',  function(){
    console.log("in sendPlayers on Click");
  });
  //collect player names
  //put into an object
  // randomly assign color on server??
  //randomly assign specialty on server??
};
