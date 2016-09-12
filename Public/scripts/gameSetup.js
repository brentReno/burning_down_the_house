console.log("You may now start the fire!");
var numPlayers;
var playerNames ={};
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
        playerDiv = "<div id='PlayerDiv'><p>Enter Players Names</p><form id ='players2'>Player One: <br><input type='text' id='playerOneName'><br>Player Two:<br><input type='text' id='playerTwoName'></form><button id='sendPlayers'>Send</button></div> ";
        //empty display Div and add Player Div
        $("#displayDiv").empty().html(playerDiv);

        break;
        case 3:
        //set playerDiv contents to 3
        playerDiv = "<div id='PlayerDiv'><p>Enter Players Names</p><form id ='players3'>Player One: <br><input type='text' id='playerOneName'><br>Player Two:<br><input type='text' id='playerTwoName'><br>Player Three:<br><input type='text' id='playerThreeName'></form><button id='sendPlayers'>Send</button></div> ";
        //empty display Div and add Player Div
        $("#displayDiv").empty().html(playerDiv);
          break;
        case 4:
        //set playerDiv contents to 4
        playerDiv = "<div id='PlayerDiv'><p>Enter Players Names</p><form id ='players4'>Player One: <br><input type='text' id='playerOneName'><br>Player Two:<br><input type='text' id='playerTwoName'><br>Player Three:<br><input type='text' id='playerThreeName'><br>Player Four:<br><input type='text' id='playerFourName'></form><button id='sendPlayers'>Send</button></div> ";
        //empty display Div and add Player Div
        $("#displayDiv").empty().html(playerDiv);
          break;
        case 5:
        //set playerDiv contents to 5
        playerDiv = "<div id='PlayerDiv'><p>Enter Players Names</p><form id ='players5'>Player One: <br><input type='text' id='playerOneName'><br>Player Two:<br><input type='text' id='playerTwoName'><br>Player Three:<br><input type='text' id='playerThreeName'><br>Player Four:<br><input type='text' id='playerFourName'><br>Player Five:<br><input type='text' id='playerFiveName'></form><button id='sendPlayers'>Send</button></div> ";
        //empty display Div and add Player Div
        $("#displayDiv").empty().html(playerDiv);
          break;
        case 6:
        //set playerDiv contents to 5
        playerDiv = "<div id='PlayerDiv'><p>Enter Players Names</p><form id ='players6'>Player One: <br><input type='text' id='playerOneName'><br>Player Two:<br><input type='text' id='playerTwoName'><br>Player Three:<br><input type='text' id='playerThreeName'><br>Player Four:<br><input type='text' id='playerFourName'><br>Player Five:<br><input type='text' id='playerFiveName'><br>PlayerSix:<br><input type='text' id='playerSixName'></form><button id='sendPlayers'>Send</button></div> ";
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
    //collect player names
    switch (Number(numPlayers)) {
      case 2:
        var playerOne = ($('body').find('#playerOneName').val());
        var playerTwo = ($('body').find('#playerTwoName').val());
        console.log("player names =", playerOne, playerTwo);
      break;
      case 3:
       playerOne = ($('body').find('#playerOneName').val());
       playerTwo = ($('body').find('#playerTwoName').val());
       var playerThree = ($('body').find('#playerThreeName').val());
      console.log("player names =", playerOne, playerTwo, playerThree);
      break;
      case 4:
        playerOne = ($('body').find('#playerOneName').val());
        playerTwo = ($('body').find('#playerTwoName').val());
        playerThree = ($('body').find('#playerThreeName').val());
        var playerFour = ($('body').find('#playerFourName').val());
        console.log("player names =", playerOne, playerTwo, playerThree, playerFour);
      break;
      case 5:
        playerOne = ($('body').find('#playerOneName').val());
        playerTwo = ($('body').find('#playerTwoName').val());
        playerThree = ($('body').find('#playerThreeName').val());
        playerFour = ($('body').find('#playerFourName').val());
        var playerFive = ($('body').find('#playerFiveName').val());
        console.log("player names =", playerOne, playerTwo, playerThree, playerFour,playerFive);
      break;
      case 6:
        playerOne = ($('body').find('#playerOneName').val());
        playerTwo = ($('body').find('#playerTwoName').val());
        playerThree = ($('body').find('#playerThreeName').val());
        playerFour = ($('body').find('#playerFourName').val());
        playerFive = ($('body').find('#playerFiveName').val());
        var playerSix = ($('body').find('#playerSixName').val());
        console.log("player names =", playerOne, playerTwo, playerThree, playerFour,playerFive, playerSix);
      break;
      default:
      console.log("Something has gone wrong");
    }
    //put into an object
    // randomly assign color on server??
    //randomly assign specialty on server??
  });

};
